<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Quotes;

class QuotesController extends Controller
{
    public function index()
    {
        $quotes = Quotes::all();
        return response()->json([
            'quotes' => $quotes
        ], 200);
    }

    // Create quotes
    public function store(Request $request)
    {
        $quotes = new Quotes;
        $quotes->w3lName = $request->input('w3lName');
        $quotes->w3lSender = $request->input('w3lSender');
        $quotes->w3lMessage = $request->input('w3lMessage');
        $quotes->save();

        return response()->json([
            "quotes" => $quotes
        ], 200);
    }
}
