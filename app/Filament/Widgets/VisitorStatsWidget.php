<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use App\Models\PageVisit;
use Carbon\Carbon;

class VisitorStatsWidget extends BaseWidget
{
    protected function getStats(): array
    {
        $today = Carbon::today();
        $yesterday = Carbon::yesterday();
        $thisMonth = Carbon::now()->startOfMonth();
        $lastMonth = Carbon::now()->subMonth()->startOfMonth();
        $lastMonthEnd = Carbon::now()->subMonth()->endOfMonth();

        // Today's visitors
        $todayVisitors = PageVisit::whereDate('visit_date', $today)->count();
        
        // Yesterday's visitors for comparison
        $yesterdayVisitors = PageVisit::whereDate('visit_date', $yesterday)->count();
        $todayChange = $yesterdayVisitors > 0 
            ? (($todayVisitors - $yesterdayVisitors) / $yesterdayVisitors * 100) 
            : 0;

        // This month's visitors
        $thisMonthVisitors = PageVisit::where('visit_date', '>=', $thisMonth)->count();
        
        // Last month's visitors for comparison
        $lastMonthVisitors = PageVisit::whereBetween('visit_date', [$lastMonth, $lastMonthEnd])->count();
        $monthChange = $lastMonthVisitors > 0 
            ? (($thisMonthVisitors - $lastMonthVisitors) / $lastMonthVisitors * 100) 
            : 0;

        // Total visitors all time
        $totalVisitors = PageVisit::count();

        // Last 7 days visitors
        $last7Days = PageVisit::where('visit_date', '>=', Carbon::now()->subDays(7))->count();

        return [
            Stat::make('Visitors Today', number_format($todayVisitors))
                ->description($this->formatChange($todayChange, 'vs yesterday'))
                ->descriptionIcon($todayChange >= 0 ? 'heroicon-m-arrow-trending-up' : 'heroicon-m-arrow-trending-down')
                ->color($todayChange >= 0 ? 'success' : 'danger')
                ->chart($this->getLast7DaysChart()),
            
            Stat::make('This Month', number_format($thisMonthVisitors))
                ->description($this->formatChange($monthChange, 'vs last month'))
                ->descriptionIcon($monthChange >= 0 ? 'heroicon-m-arrow-trending-up' : 'heroicon-m-arrow-trending-down')
                ->color($monthChange >= 0 ? 'success' : 'danger'),
            
            Stat::make('Last 7 Days', number_format($last7Days))
                ->description('Unique visitors')
                ->descriptionIcon('heroicon-m-users')
                ->color('info'),
            
            Stat::make('Total Visitors', number_format($totalVisitors))
                ->description('All time')
                ->descriptionIcon('heroicon-m-chart-bar')
                ->color('primary'),
        ];
    }

    protected function formatChange(float $change, string $comparison): string
    {
        return round(abs($change), 1) . '% ' . ($change >= 0 ? 'increase' : 'decrease') . ' ' . $comparison;
    }

    protected function getLast7DaysChart(): array
    {
        $data = [];
        for ($i = 6; $i >= 0; $i--) {
            $date = Carbon::now()->subDays($i)->toDateString();
            $count = PageVisit::whereDate('visit_date', $date)->count();
            $data[] = $count;
        }
        return $data;
    }
}
