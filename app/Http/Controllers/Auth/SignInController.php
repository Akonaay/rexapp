<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SignInController extends Controller
{
    public function __invoke(Request $request)
    {
        if (!$token = auth()->attempt($request->only('email', 'password'))) {
            return response(['error' => 'Invalid email or password'], 401);
        }

        return response()->json([
            'status' => "Success",
            'token' => $token,
            'userId' => Auth()->user(),
        ]);
    }
}
