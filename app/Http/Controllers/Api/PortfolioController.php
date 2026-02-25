<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;

class PortfolioController extends Controller
{
    public function index()
    {
        $portfolios = Portfolio::where('is_active', true)
            ->orderBy('order', 'asc')
            ->get()
            ->map(function ($item) {
                return [
                    'id'             => $item->id,
                    'title'          => $item->title,
                    'category'       => $item->category,
                    'sinopsis'       => $item->sinopsis,
                    'image'          => $item->image,
                    'video_url'      => $item->video_embed,
                    'trailer_url'    => $item->trailer_url,
                    'full_movie_url' => $item->full_movie_url,
                ];
            });

        return response()->json($portfolios);
    }
}
