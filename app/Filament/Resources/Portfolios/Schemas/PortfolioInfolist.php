<?php

namespace App\Filament\Resources\Portfolios\Schemas;

use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Text;
use Filament\Schemas\Schema;

class PortfolioInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Portfolio Information')
                    ->schema([
                        Text::make('Title: {title}'),
                        Text::make('Category: {category}'),
                        Text::make('Synopsis: {sinopsis}'),
                        Text::make('Video URL: {video_url}'),
                    ])->columns(1),
                
                Section::make('Settings')
                    ->schema([
                        Text::make('Display Order: {order}'),
                        Text::make('Active: {is_active}'),
                    ])->columns(2),
            ]);
    }
}
