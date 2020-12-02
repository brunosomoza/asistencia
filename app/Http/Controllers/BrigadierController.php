<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Service;
use DB;

class BrigadierController extends Controller
{
	public function asignarNovedad(Request $request){

        $usuario = User::find($request->id);
        // $fecha = date('Y-m-d H:i:s'); 
        // $servicio = new Service;
        // $servicio->fecha = $fecha;
        // $servicio->nombre = "test11";
        // $servicio->user_id = $request->id;
        // $servicio->puntos = 0;
        // $servicio->save();
        return View('layouts.perfil.escribirNoverdad', compact('usuario',$usuario));

	}


	public function guardarNovedad(Request $request){

        //$usuario = User::find($request->id);
        
        $fecha = date('Y-m-d H:i:s'); 
        
        $servicio = new Service;
        $servicio->fecha = $fecha;
        $servicio->nombre = $request->novedad;
        $servicio->user_id = $request->idCadete;
        $servicio->descripcion = $request->descripcionNovedad;
        $servicio->puntos = 0;

        $servicio->save();
        return redirect('/profile');

	}



        public function verNovedades(){



                $novedades = DB::table('services')
                            ->join('users', 'services.user_id', '=', 'users.id')
                            ->select('users.name as nombre', 'services.nombre as nombreservicio', 'services.fecha', 'services.descripcion')
                            ->get();


        return View('layouts.perfil.verNovedades', compact('novedades',$novedades));

        }






}
