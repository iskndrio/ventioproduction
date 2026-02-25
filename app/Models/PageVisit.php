<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageVisit extends Model
{
    protected $fillable = [
        'ip_address',
        'user_agent',
        'url',
        'referer',
        'visit_date',
    ];

    protected $casts = [
        'visit_date' => 'date',
    ];
}
