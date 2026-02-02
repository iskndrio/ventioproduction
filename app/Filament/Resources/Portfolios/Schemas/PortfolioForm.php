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
                                'Video' => 'Video',
                                'Photography' => 'Photography',
                                'Design' => 'Design',
                                'Animation' => 'Animation',
                                'Marketing' => 'Marketing',
                            ])
                            ->required(),
                        
                        Textarea::make('sinopsis')
                            ->label('Synopsis')
                            ->rows(3)
                            ->maxLength(1000),
                        
                        TextInput::make('video_url')
                            ->label('Video URL (YouTube Embed)')
                            ->url()
                            ->placeholder('https://www.youtube.com/embed/...'),
                    ])->columns(1),
                
                Section::make('Media')
                    ->schema([
                        FileUpload::make('image')
                            ->label('Image/Cover')
                            ->image()
                            ->directory('portfolio/images')
                            ->maxSize(5120),
                        
                        FileUpload::make('thumbnail')
                            ->label('Thumbnail')
                            ->image()
                            ->directory('portfolio/thumbnails')
                            ->maxSize(2048),
                    ])->columns(2),
                
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
