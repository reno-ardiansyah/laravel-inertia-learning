<?php

namespace App\Services\Config;

use LaravelEasyRepository\ServiceApi;
use App\Repositories\Config\ConfigRepository;

class ConfigServiceImplement extends ServiceApi implements ConfigService{

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
     protected ConfigRepository $mainRepository;

    public function __construct(ConfigRepository $mainRepository)
    {
      $this->mainRepository = $mainRepository;
    }

    // Define your custom methods :)
}
