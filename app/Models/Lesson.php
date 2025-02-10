<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Lesson extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name'
    ];

    public function teachers(): BelongsToMany
    {
        return $this->belongsToMany(Teacher::class)->withPivot('level');
    }

    public function schedules(): HasMany
    {
        return $this->hasMany(Schedul::class);
    }
}
