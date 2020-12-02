<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
use App\User;

class ProfileController extends Controller
{

        public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request){

    	$role_id = Auth::user()->role_id;

    	//$role_id = intval($request->prefil);

    	if($role_id > 4 || $role_id < 1)
    	{
    		return View('Error');
    	}
        else if($role_id == 1){

//          $usuarios = auth()->user()->role->name ;
            $usuarios = DB::table('users')
            ->join('roles', 'users.role_id', '=', 'roles.id')
            ->select('users.*', 'users.id as idusuario', 'roles.id', 'roles.nombre as nombrerol')
            ->orderBy('idusuario', 'ASC')
            ->get();
            return View('layouts.perfil.admin', compact('usuarios',$usuarios));
        }
        else if($role_id == 2){
            return View('layouts.perfil.oficial');

        }
        else if($role_id == 3){
            $usuarios = DB::table('users')
            ->join('roles', 'users.role_id', '=', 'roles.id')
            ->select('users.*', 'users.id as idusuario', 'roles.id', 'roles.nombre as nombrerol')
            ->orderBy('idusuario', 'DESC')
            ->get();

            return View('layouts.perfil.brigadier', compact('usuarios',$usuarios));

        }

        else if($role_id == 4){
            return View('layouts.perfil.cadete');

        }




    	else
    	{
    		return "ID desconocido";

    	}
    }

}
