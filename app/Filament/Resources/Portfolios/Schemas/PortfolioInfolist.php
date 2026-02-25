<?php

namespace App\Filament\Resources\Portfolios\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class PortfolioInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Portfolio Information')
                    ->schema([
                        TextEntry::make('title')
                            ->label('Title'),
                        TextEntry::make('category')
                            ->label('Category'),
                        TextEntry::make('sinopsis')
                            ->label('Synopsis'),
                        TextEntry::make('video_url')
                            ->label('Video URL')
                            ->url(fn ($state) => $state, shouldOpenInNewTab: true)
                            ->placeholder('No video')
                            ->copyable()
                            ->copyMessage('URL copied!')
                            ->copyMessageDuration(1500),
                    ])->columns(1),
                
                Section::make('Settings')
                    ->schema([
                        TextEntry::make('order')
                            ->label('Display Order'),
                        TextEntry::make('is_active')
                            ->label('Active')
                            ->badge()
                            ->color(fn (bool $state): string => $state ? 'success' : 'danger')
                            ->formatStateUsing(fn (bool $state): string => $state ? 'Active' : 'Inactive'),
                    ])->columns(2),
            ]);
    }
}
