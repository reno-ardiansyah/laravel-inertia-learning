<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pagination\LengthAwarePaginator;

trait HasFilters
{
    /**
     * Apply search filter to query
     */
    public function applySearch(Builder $query, ?string $search, array $searchableFields = []): Builder
    {
        if ($search && !empty($searchableFields)) {
            $query->where(function ($q) use ($search, $searchableFields) {
                foreach ($searchableFields as $field) {
                    $q->orWhere($field, 'LIKE', "%{$search}%");
                }
            });
        }
        return $query;
    }

    /**
     * Apply sorting to query
     */
    public function applySorting(Builder $query, ?string $sort_by, bool $sort_by_desc = false): Builder
    {
        if ($sort_by) {
            $query->orderBy($sortBy, $sort_by_desc ? 'desc' : 'asc');
        }
        return $query;
    }

    /**
     * Apply pagination to query
     */
    public function applyPagination(Builder $query, ?int $limit = 10): LengthAwarePaginator
    {
        return $query->paginate($limit);
    }
}

