<?php

use App\Http\Controllers\DirectoryBusinessController;

Route::get('/businesses', [DirectoryBusinessController::class, 'index']);
Route::post('/businesses', [DirectoryBusinessController::class, 'store']);
Route::get('/businesses/{id}', [DirectoryBusinessController::class, 'show']);
Route::put('/businesses/{id}', [DirectoryBusinessController::class, 'update']);
Route::delete('/businesses/{id}', [DirectoryBusinessController::class, 'destroy']);

?>
