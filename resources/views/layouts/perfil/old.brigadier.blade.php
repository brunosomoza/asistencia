@extends('layouts.plantilla')

@section('content')
<h3>Registro de Cadetes</h3>
<br>
<div class="row col-md-12">

<form method="POST" action="{{ route('guardarCadete') }}">
		@csrf
  <div class="form-group">
    <label for="nombreCadete">Nombre</label>
    <input type="text" class="form-control" id="nombreCadete" name="nombreCadete" placeholder="Nombre y Apellido">
  </div>

  <div class="form-group">
    <label for="dniCadete">Correo electronico</label>
    <input type="text" class="form-control" id="dniCadete" name="dniCadete" placeholder="*****@hotmail.com">
  </div>

  <div class="form-group">
    <label for="gradoCadete">Año del Cadete</label>
	    <select class="form-control" id="gradoCadete" name="gradoCadete">  
	      <option value="0">-seleccione-</option>
	      <option value="1">Aspirante</option>
	      <option value="2">Primer Año</option>
	      <option value="3">Segundo Año</option>
	      <option value="4">Tercer Año</option>
	      <option value="5">Cuarto Año</option>
	    </select>
  </div>

    <div class="form-group">
        <button type="submit" class="btn btn-primary">Registrar</button>
    </div>
</form>
</div>
<hr>
<br>

            <div class="row">
              <h4>Lista de Usuarios</h4><br><br>

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Nombre Usuario</th>
                        <th scope="col">Asignar Novedad</th>

                    </tr>
                </thead>


                <tbody>
                    @forelse ($usuarios as $usuario)
                    <tr>
                        <td>{{ $usuario->idusuario }}</td>
                        <td>{{ $usuario->email }}</td>
                        <td>{{ $usuario->name }}</td>
                        <th scope="col">
                        <a href="asignarNovedad/{{ $usuario->idusuario }}" class="btn btn-primary active" role="button">SI</a>
                        </th>

                    </tr>
                    @empty
                        <p>No hay tareas disponibles...</p>
                    @endforelse
                </tbody>
            </table>
            </div>


        </div>
@endsection
