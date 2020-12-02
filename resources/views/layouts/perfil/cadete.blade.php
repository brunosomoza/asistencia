@extends('layouts.plantilla')

@section('content')
<div class="row col-md-8">
	<form class="col-md-8">
	  <div class="form-group">
	    <label for="exampleInputEmail1">Ingrese su DNI</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
	    <small id="emailHelp" class="form-text text-muted">Solo usuarios registrados.</small>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Seleccione su Año</label>
			<select class="form-control" id="exampleFormControlSelect1">
			  <option value="0">_Selecionar</option>
			  <option value="1">Aspirante</option>
			  <option value="2">Primero</option>
			  <option value="3">Segundo</option>
			  <option value="4">Tercero</option>
			  <option value="5">Cuarto</option>
			</select>
	  </div>
	  <div class="class="form-group>
	  	<button type="submit" class="btn btn-primary">Consultar</button>
	  </div>
	  
	</form>
</div>
@endsection
