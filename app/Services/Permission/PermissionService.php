<?php

namespace App\Services\Permission;

use Illuminate\Pagination\LengthAwarePaginator;
use LaravelEasyRepository\BaseService;

interface PermissionService extends BaseService{

    /**
     * Return pagination items
     * @return LengthAwarePaginator|null
     */
    public function getPaginatedPermissions(array $filter): LengthAwarePaginator;
}
