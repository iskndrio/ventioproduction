<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

Artisan::command('db:migrate-pgsql-to-mysql', function () {
    $sourceConfig = [
        'driver' => 'pgsql',
        'host' => env('LEGACY_PGSQL_HOST', '127.0.0.1'),
        'port' => env('LEGACY_PGSQL_PORT', '5432'),
        'database' => env('LEGACY_PGSQL_DATABASE', 'ventioph'),
        'username' => env('LEGACY_PGSQL_USERNAME', 'postgres'),
        'password' => env('LEGACY_PGSQL_PASSWORD', ''),
        'charset' => env('LEGACY_PGSQL_CHARSET', 'utf8'),
        'prefix' => '',
        'prefix_indexes' => true,
        'search_path' => 'public',
        'sslmode' => 'prefer',
    ];

    config(['database.connections.pgsql_legacy' => $sourceConfig]);

    $source = DB::connection('pgsql_legacy');
    $target = DB::connection('mysql');

    $sourceTables = collect($source->select(
        'SELECT tablename FROM pg_tables WHERE schemaname = ?',
        ['public']
    ))->map(fn ($row) => $row->tablename)->all();

    $targetTables = collect($target->select('SHOW TABLES'))
        ->map(function ($row) {
            $values = array_values((array) $row);
            return $values[0] ?? null;
        })
        ->filter()
        ->all();

    $tablesToMigrate = array_values(array_diff(
        array_intersect($sourceTables, $targetTables),
        ['migrations']
    ));

    if (empty($tablesToMigrate)) {
        $this->warn('No matching tables found between PostgreSQL and MySQL.');
        return;
    }

    $this->info('Migrating tables: '.implode(', ', $tablesToMigrate));

    $target->statement('SET FOREIGN_KEY_CHECKS=0');

    try {
        foreach ($tablesToMigrate as $table) {
            $target->table($table)->truncate();

            $rows = $source->table($table)->get();

            if ($rows->isNotEmpty()) {
                foreach ($rows->map(fn ($row) => (array) $row)->chunk(500) as $chunk) {
                    $target->table($table)->insert($chunk->all());
                }
            }

            $this->line(sprintf(
                '%s: %d row(s) copied',
                $table,
                $target->table($table)->count()
            ));
        }
    } finally {
        $target->statement('SET FOREIGN_KEY_CHECKS=1');
    }

    $this->info('Data migration from PostgreSQL to MySQL completed.');
})->purpose('Copy data from legacy PostgreSQL to MySQL');
