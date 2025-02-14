<?php

namespace App\Services\Permission;

use LaravelEasyRepository\ServiceApi;
use App\Repositories\Permission\PermissionRepository;
use Illuminate\Pagination\LengthAwarePaginator;

class PermissionServiceImplement extends ServiceApi implements PermissionService
{

  /**
   * set title message api for CRUD
   * @param string $title
   */
  protected string $title = "";
  /**
   * uncomment this to override the default message
   * protected string $create_message = "";
   * protected string $update_message = "";
   * protected string $delete_message = "";
   */

  /**
   * don't change $this->mainRepository variable name
   * because used in extends service class
   */
  protected PermissionRepository $mainRepository;

  public function __construct(PermissionRepository $mainRepository)
  {
    $this->mainRepository = $mainRepository;
  }

  public function getPaginatedPermissions(array $filters = []): LengthAwarePaginator
  {
    $search = $filters['search'] ?? null;
    $sortBy = $filters['sort_by'] ?? null;
    $sortDesc = isset($filters['sort_by_desc'])
      ? filter_var($filters['sort_by_desc'], FILTER_VALIDATE_BOOLEAN)
      : false;
    $perPage = $filters['limit'] ?? 10;

    return $this->mainRepository->getFilteredPermissions($search, $sortBy, $sortDesc, $perPage);
  }

  // Define your custom methods :)
}
