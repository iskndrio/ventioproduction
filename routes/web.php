<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PortfolioController;

Route::get('/', function () {
    return view('welcome');
});

// API route for portfolio
Route::get('/api/portfolios', [PortfolioController::class, 'index']);
