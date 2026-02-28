<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::where('is_active', true)
            ->orderBy('order', 'asc')
            ->get(['id', 'title', 'description', 'icon']);

        return response()->json($services);
    }
}
