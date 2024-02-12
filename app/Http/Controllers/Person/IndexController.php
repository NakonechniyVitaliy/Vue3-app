<?php

namespace App\Http\Controllers\Person;

use App\Models\Person;
use Illuminate\Routing\Controller;


class IndexController extends Controller
{
    public function __invoke()
    {
        $persons = Person::all();
        return $persons;
    }
}
