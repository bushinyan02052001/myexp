<?php

use Illuminate\Support\Facades\Route;
use Modules\Vue\Http\Controllers\VueController;

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

Route::group(['prefix' => ''], function () {
    Route::get('/', [VueController::class, 'index'])->name('dashboard');
    Route::get('/post',[VueController::class,'show'])->name('post.show');
    Route::get('/create',[VueController::class,'create'])->name('post.create');
    Route::post('/create',[VueController::class,'create'])->name('post.store');
});
