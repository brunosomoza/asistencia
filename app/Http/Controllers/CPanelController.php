<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CPanelController extends Controller
{
    public function index(){
        return View('layouts.cpanel');
    }

    public function login(Request $request){
    	if($request->usuario == "admin" && $request->password == "12345678"){
    		return View('layouts.cpanel');    	}
    	else{
	    	return View('welcome');
    	}

    }
}