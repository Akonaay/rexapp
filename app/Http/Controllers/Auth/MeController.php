<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MeController extends Controller
{
    public function __construct()
    {
        $this->middleware(['api']);
    }

    public function __invoke(Request $request)
    {
        return $request->user();
    }
}
