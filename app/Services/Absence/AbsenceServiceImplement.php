<?php

namespace App\Services\Absence;

use LaravelEasyRepository\ServiceApi;
use App\Repositories\Absence\AbsenceRepository;

class AbsenceServiceImplement extends ServiceApi implements AbsenceService{

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
     protected AbsenceRepository $mainRepository;

    public function __construct(AbsenceRepository $mainRepository)
    {
      $this->mainRepository = $mainRepository;
    }

    // Define your custom methods :)
}
