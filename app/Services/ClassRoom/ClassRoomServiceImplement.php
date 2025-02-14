<?php

namespace App\Services\ClassRoom;

use LaravelEasyRepository\ServiceApi;
use App\Repositories\ClassRoom\ClassRoomRepository;

class ClassRoomServiceImplement extends ServiceApi implements ClassRoomService{

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
     protected ClassRoomRepository $mainRepository;

    public function __construct(ClassRoomRepository $mainRepository)
    {
      $this->mainRepository = $mainRepository;
    }

    // Define your custom methods :)
}
