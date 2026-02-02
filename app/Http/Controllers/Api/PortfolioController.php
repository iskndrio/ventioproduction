<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index()
    {
        $portfolios = Portfolio::where('is_active', true)
            ->orderBy('order', 'asc')
            ->get();

        return response()->json($portfolios);
    }
}
