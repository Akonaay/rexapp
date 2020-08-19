<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', 'PagesController@index')->where('any', '.*');

// Route::get('/{any?}', function () {
//     return view('welcome');
// })->where('any', '^(?!api\/)[\/\w\.-]*');
