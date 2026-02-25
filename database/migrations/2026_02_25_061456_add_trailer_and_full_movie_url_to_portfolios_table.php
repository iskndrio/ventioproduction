<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('portfolios', function (Blueprint $table) {
            $table->string('trailer_url')->nullable()->after('video_url');
            $table->string('full_movie_url')->nullable()->after('trailer_url');
        });

        // Migrate existing video_url data to trailer_url
        DB::table('portfolios')->whereNotNull('video_url')->update([
            'trailer_url' => DB::raw('video_url')
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('portfolios', function (Blueprint $table) {
            $table->dropColumn(['trailer_url', 'full_movie_url']);
        });
    }
};
