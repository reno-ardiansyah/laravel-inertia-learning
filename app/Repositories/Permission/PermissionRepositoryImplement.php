<?php

namespace App\Repositories\Permission;

use App\Traits\HasFilters;
use Illuminate\Pagination\LengthAwarePaginator;
use LaravelEasyRepository\Implementations\Eloquent;
use Spatie\Permission\Models\Permission;

class PermissionRepositoryImplement extends Eloquent implements PermissionRepository{

    use HasFilters;
    /**
    * Model class to be used in this repository for the common methods inside Eloquent
    * Don't remove or change $this->model variable name
    * @property Model|mixed $model;
    */
    protected Permission $model;

    public function __construct(Permission $model)
    {
        $this->model = $model;
    }

    public function getFilteredPermissions(?string $search, ?string $sortBy, ?bool $sortDesc, ?int $perPage = 10): LengthAwarePaginator
    {
        $query = $this->model->query();

        $query = $this->applySearch($query, $search, ['name']);

        $query = $this->applySorting($query, $sortBy, $sortDesc);

        return $this->applyPagination($query, $perPage);
    }
}
