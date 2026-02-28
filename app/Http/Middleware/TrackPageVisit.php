<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\PageVisit;
use Carbon\Carbon;

class TrackPageVisit
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Skip tracking for admin panel and API routes
        if ($request->is('vntm-dashboard-x9k2/*') || $request->is('api/*')) {
            return $next($request);
        }

        try {
            $ipAddress = $request->ip();
            $today = Carbon::today();

            // Track only unique visitors per day (one record per IP per day)
            PageVisit::firstOrCreate(
                [
                    'ip_address' => $ipAddress,
                    'visit_date' => $today,
                ],
                [
                    'user_agent' => $request->userAgent(),
                    'url' => $request->fullUrl(),
                    'referer' => $request->header('referer'),
                ]
            );
        } catch (\Exception $e) {
            // Fail silently to not break the application
            \Log::error('Failed to track page visit: ' . $e->getMessage());
        }

        return $next($request);
    }
}
