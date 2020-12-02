
@extends('layouts.plantilla')

@section('content')
<br>
<h3>Asignamos Novedad del Cadete</h3>
<br>

<form method="POST" action="{{ route('guardarNovedad') }}">
	@csrf
  <div class="form-group">
    <label for="exampleFormControlInput1">Nombre del Cadete</label>
    <input type="text" class="form-control" id="nombreCadete" name="nombreCadete" value="{{ $usuario->name}}" placeholder="Nombre y Apellido">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Selecionar Novedad</label>
    <select class="form-control" id="novedad" name="novedad">
      <option>_SELECCIONAR</option>
      <option value="Guardia">Guardia</option>
      <option value="Cuartelero">Cuartelero</option>
      <option value="Comision">Comision</option>
      <option value="Enfermeria">Enfermeria</option>
      <option value="HMC">HMC</option>
    </select>
  </div>
  <div class="form-group">
    <label for="descripcionNovedad">Descripcion Novedad</label>
    <textarea class="form-control" id="descripcionNovedad" name="descripcionNovedad" rows="5"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Asignar Novedad</button>
  <input type="hidden" class="form-control" id="idCadete" name="idCadete" value="{{ $usuario->id}}">
  <input type="hidden" class="form-control" id="dni" name="dni" value="{{ $usuario->dni}}">
</form>
@endsection


