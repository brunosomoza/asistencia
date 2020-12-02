<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Service;


class CadeteController extends Controller
{


    public function asignarNovedad(Request $request){

        $usuario = User::find($request->id);
        dd($usuario);

        // $fecha = date('Y-m-d H:i:s'); 
        // $servicio = new Service;
        // $servicio->fecha = $fecha;
        // $servicio->nombre = "test11";
        // $servicio->user_id = $request->id;
        // $servicio->puntos = 0;
        // $servicio->save();
        return $request->id;
    }

    public function guardarCadete(Request $request){
        
		$correo = $request->dniCadete . "@escuelamilitar.edu.pe";
		$usuario = new User;	
		$usuario->role_id = 4;
		$usuario->section_id = $request->gradoCadete;
		$usuario->email = $correo;
		$usuario->name = $request->nombreCadete;
		$usuario->dni = $request->dniCadete;
		$usuario->puntos = 5;
		$usuario->password = $correo;
        $usuario->save();
        return redirect('/profile');


    }
}
