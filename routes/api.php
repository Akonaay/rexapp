<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function () {

    Route::post('signin', 'SignInController');
    Route::post('signout', 'SignOutController');
    Route::get('me', 'MeController');
    Route::post('register', 'RegisterController');
});

Route::get('services', 'ServicesController@all');
Route::get('services/{id}', 'ServicesController@get');
Route::post('services/new', 'ServicesController@new');
Route::put('services/{id}', 'ServicesController@update');
Route::delete('services/{id}', 'ServicesController@destroy');

Route::resource('news', 'NewsController');

Route::get('quotes', 'QuotesController@index');
Route::post('quotes/store', 'QuotesController@store');
