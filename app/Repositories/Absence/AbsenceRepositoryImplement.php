<?php

namespace App\Repositories\Absence;

use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\Absence;

class AbsenceRepositoryImplement extends Eloquent implements AbsenceRepository{

    /**
    * Model class to be used in this repository for the common methods inside Eloquent
    * Don't remove or change $this->model variable name
    * @property Model|mixed $model;
    */
    protected Absence $model;

    public function __construct(Absence $model)
    {
        $this->model = $model;
    }

    // Write something awesome :)
}
