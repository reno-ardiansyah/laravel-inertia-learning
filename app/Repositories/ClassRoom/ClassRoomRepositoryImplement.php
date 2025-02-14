<?php

namespace App\Repositories\ClassRoom;

use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\ClassRoom;

class ClassRoomRepositoryImplement extends Eloquent implements ClassRoomRepository{

    /**
    * Model class to be used in this repository for the common methods inside Eloquent
    * Don't remove or change $this->model variable name
    * @property Model|mixed $model;
    */
    protected ClassRoom $model;

    public function __construct(ClassRoom $model)
    {
        $this->model = $model;
    }

    // Write something awesome :)
}
