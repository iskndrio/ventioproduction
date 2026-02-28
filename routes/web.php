<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\ServiceController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/portfolios', [PortfolioController::class, 'index']);
Route::get('/api/services', [ServiceController::class, 'index']);
