<?php

namespace App\Repositories\Teacher;

use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\Teacher;

class TeacherRepositoryImplement extends Eloquent implements TeacherRepository{

    /**
    * Model class to be used in this repository for the common methods inside Eloquent
    * Don't remove or change $this->model variable name
    * @property Model|mixed $model;
    */
    protected Teacher $model;

    public function __construct(Teacher $model)
    {
        $this->model = $model;
    }

    // Write something awesome :)
}
