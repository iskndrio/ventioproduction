<?php

namespace App\Filament\Resources\Services;

use App\Filament\Resources\Services\Pages\CreateService;
use App\Filament\Resources\Services\Pages\EditService;
use App\Filament\Resources\Services\Pages\ListServices;
use App\Models\Service;
use BackedEnum;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;

class ServiceResource extends Resource
{
    protected static ?string $model = Service::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedWrenchScrewdriver;

    public static function getNavigationGroup(): ?string
    {
        return 'Content';
    }

    public static function form(Schema $schema): Schema
    {
        return $schema->components([
            TextInput::make('title')
                ->required()
                ->maxLength(255)
                ->columnSpanFull(),

            Textarea::make('description')
                ->rows(3)
                ->columnSpanFull(),

            Select::make('icon')
                ->label('Icon (FontAwesome)')
                ->options([
                    'faFilm'          => 'Film',
                    'faBuilding'      => 'Building',
                    'faRectangleAd'   => 'Advertisement',
                    'faCamera'        => 'Camera',
                    'faVideo'         => 'Video',
                    'faStar'          => 'Star',
                    'faBullhorn'      => 'Bullhorn',
                    'faLightbulb'     => 'Lightbulb',
                    'faPalette'       => 'Palette',
                    'faPhotoFilm'     => 'Photo Film',
                ])
                ->required()
                ->default('faFilm'),

            TextInput::make('order')
                ->numeric()
                ->default(0),

            Toggle::make('is_active')
                ->default(true),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('order')
                    ->sortable()
                    ->width(60),

                TextColumn::make('icon')
                    ->label('Icon Key'),

                TextColumn::make('title')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('description')
                    ->limit(50)
                    ->wrap(),

                ToggleColumn::make('is_active')
                    ->label('Active'),
            ])
            ->defaultSort('order')
            ->reorderable('order')
            ->actions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index'  => ListServices::route('/'),
            'create' => CreateService::route('/create'),
            'edit'   => EditService::route('/{record}/edit'),
        ];
    }
}
