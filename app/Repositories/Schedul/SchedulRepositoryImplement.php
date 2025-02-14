<?php

namespace App\Repositories\Schedul;

use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\Schedul;

class SchedulRepositoryImplement extends Eloquent implements SchedulRepository{

    /**
    * Model class to be used in this repository for the common methods inside Eloquent
    * Don't remove or change $this->model variable name
    * @property Model|mixed $model;
    */
    protected Schedul $model;

    public function __construct(Schedul $model)
    {
        $this->model = $model;
    }

    // Write something awesome :)
}
