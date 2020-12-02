<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Proyecto EMCH
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/profile', 'ProfileController@index')->name('profile');
Route::get('/asignarNovedad/{id}', 'BrigadierController@asignarNovedad')->name('asignarNovedad');
Route::get('/verNovedades', 'BrigadierController@verNovedades')->name('verNovedades');

// Ruta Plantilla
Route::get('/hijo', 'Controller@base')->name('base');

//Route::get('/asignarNovedad/{id}', 'CadeteController@asignarNovedad')->name('asignarNovedad');
Route::post('/guardarCadete', 'CadeteController@guardarCadete')->name('guardarCadete');
Route::post('/guardarNovedad', 'BrigadierController@guardarNovedad')->name('guardarNovedad');


// Route::get('/cpanel', 'CPanelController@index')->name('controlPanel');
// Route::post('/loginCPanel', 'CPanelController@login')->name('loginCPanel');