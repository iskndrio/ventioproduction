<?php

namespace App\Filament\Resources\Portfolios\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\Select;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class PortfolioForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Portfolio Information')
                    ->schema([
                        TextInput::make('title')
                            ->label('Title')
                            ->required()
                            ->maxLength(255),
                        
                        Select::make('category')
                            ->label('Category')
                            ->options([
                                'Movie Production' => 'Movie Production',
                                'Company Profile' => 'Company Profile',
                                'Advertising Video' => 'Advertising Video',
                                'Campaign Strategy' => 'Campaign Strategy',
                                'Professional Videography' => 'Professional Videography',
                                'Creative Direction' => 'Creative Direction',
                            ])
                            ->required(),
                        
                        Textarea::make('sinopsis')
                            ->label('Synopsis')
                            ->rows(3)
                            ->maxLength(1000),
                        
                        TextInput::make('trailer_url')
                            ->label('Trailer URL (YouTube)')
                            ->url()
                            ->placeholder('https://www.youtube.com/watch?v=... or https://youtu.be/...')
                            ->helperText('YouTube URL for trailer - displayed on website with preview'),
                        
                        TextInput::make('full_movie_url')
                            ->label('Full Movie URL')
                            ->url()
                            ->placeholder('https://...')
                            ->helperText('Any URL (YouTube, Vimeo, Drive, etc.) for full movie - shown as "Watch Full Movie" link'),
                    ])->columns(1),
                          
                Section::make('Settings')
                    ->schema([
                        TextInput::make('order')
                            ->label('Display Order')
                            ->numeric()
                            ->default(0)
                            ->required(),
                        
                        Toggle::make('is_active')
                            ->label('Active')
                            ->default(true)
                            ->required(),
                    ])->columns(2),
            ]);
    }
}
