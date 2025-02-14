<?php

namespace App\Services\Teacher;

use LaravelEasyRepository\ServiceApi;
use App\Repositories\Teacher\TeacherRepository;

class TeacherServiceImplement extends ServiceApi implements TeacherService{

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
     protected TeacherRepository $mainRepository;

    public function __construct(TeacherRepository $mainRepository)
    {
      $this->mainRepository = $mainRepository;
    }

    // Define your custom methods :)
}
