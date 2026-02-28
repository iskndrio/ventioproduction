<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            ['title' => 'Movie Production',       'description' => 'Narrative-driven short films with cinematic pacing.',                              'icon' => 'faFilm',        'order' => 1],
            ['title' => 'Company Profile',         'description' => 'Brand storytelling that builds trust and authority.',                              'icon' => 'faBuilding',    'order' => 2],
            ['title' => 'Advertising Video',       'description' => 'Ads tailored for social platforms and digital campaigns.',                         'icon' => 'faRectangleAd', 'order' => 3],
            ['title' => 'Campaign Strategy',       'description' => 'Pre-production planning that keeps shoots efficient.',                             'icon' => 'faVideo',       'order' => 4],
            ['title' => 'Videografi Profesional',  'description' => 'High-quality cinematic videos for brands and events.',                             'icon' => 'faCamera',      'order' => 5],
            ['title' => 'Creative Direction',      'description' => 'Concept development, art direction, and cohesive visual storytelling.',            'icon' => 'faFilm',        'order' => 6],
        ];

        foreach ($services as $service) {
            Service::create(array_merge($service, ['is_active' => true]));
        }
    }
}
