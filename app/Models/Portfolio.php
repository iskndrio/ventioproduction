<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    protected $fillable = [
        'title',
        'category',
        'sinopsis',
        'image',
        'thumbnail',
        'video_url',
        'trailer_url',
        'full_movie_url',
        'is_active',
        'order',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'order' => 'integer',
    ];

    /**
     * ===============================
     *  Accessor: video_embed
     *  Convert YouTube URL → embed
     *  Priority: trailer_url > video_url
     * ===============================
     */
    protected $appends = ['video_embed'];

    public function getVideoEmbedAttribute()
    {
        // Use trailer_url if available, fallback to video_url for backward compatibility
        $url = $this->trailer_url ?? $this->video_url;
        
        if (!$url) {
            return null;
        }

        // youtu.be/XXXX
        if (str_contains($url, 'youtu.be')) {
            $id = explode('/', parse_url($url, PHP_URL_PATH))[1] ?? null;
            return $id ? "https://www.youtube.com/embed/$id" : null;
        }

        // youtube.com/watch?v=XXXX
        if (str_contains($url, 'watch?v=')) {
            parse_str(parse_url($url, PHP_URL_QUERY), $query);
            return isset($query['v'])
                ? "https://www.youtube.com/embed/{$query['v']}"
                : null;
        }

        // already embed
        if (str_contains($url, '/embed/')) {
            return $url;
        }

        // local video / mp4 / external
        return $url;
    }

    public function getThumbnailAttribute()
    {
        // Use trailer_url if available, fallback to video_url for backward compatibility
        $url = $this->trailer_url ?? $this->video_url;
        
        if (!$url) {
            return null;
        }

        $videoId = null;

        // youtu.be/XXXX
        if (str_contains($url, 'youtu.be')) {
            $videoId = explode('/', parse_url($url, PHP_URL_PATH))[1] ?? null;
        }

        // youtube.com/watch?v=XXXX
        elseif (str_contains($url, 'watch?v=')) {
            parse_str(parse_url($url, PHP_URL_QUERY), $query);
            $videoId = $query['v'] ?? null;
        }

        // youtube.com/embed/XXXX
        elseif (str_contains($url, '/embed/')) {
            $parts = explode('/embed/', $url);
            $videoId = $parts[1] ?? null;
        }

        if ($videoId) {
            // Remove any query parameters if present in videoId (e.g. from embed url)
            $videoId = explode('?', $videoId)[0];
            return "https://img.youtube.com/vi/$videoId/maxresdefault.jpg";
        }

        return null;
    }
}
