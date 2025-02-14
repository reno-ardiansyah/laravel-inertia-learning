<?php

namespace App\Services\Lesson;

use LaravelEasyRepository\ServiceApi;
use App\Repositories\Lesson\LessonRepository;

class LessonServiceImplement extends ServiceApi implements LessonService{

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
     protected LessonRepository $mainRepository;

    public function __construct(LessonRepository $mainRepository)
    {
      $this->mainRepository = $mainRepository;
    }

    // Define your custom methods :)
}
