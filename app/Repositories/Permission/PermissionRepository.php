<?php

namespace App\Repositories\Permission;

use Illuminate\Pagination\LengthAwarePaginator;
use LaravelEasyRepository\Repository;

interface PermissionRepository extends Repository{

    /**
     * Return pagination items
     * @return LengthAwarePaginator|null
     */
    public function getFilteredPermissions(?string $search, ?string $sortBy, ?bool $sortDesc, ?int $perPage = 10): LengthAwarePaginator;
}
