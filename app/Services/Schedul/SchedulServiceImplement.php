<?php

namespace App\Services\Schedul;

use LaravelEasyRepository\ServiceApi;
use App\Repositories\Schedul\SchedulRepository;

class SchedulServiceImplement extends ServiceApi implements SchedulService{

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
     protected SchedulRepository $mainRepository;

    public function __construct(SchedulRepository $mainRepository)
    {
      $this->mainRepository = $mainRepository;
    }

    // Define your custom methods :)
}
