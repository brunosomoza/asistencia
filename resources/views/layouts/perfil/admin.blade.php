@extends('layouts.plantilla')

@section('content')
<br>
            <div class="row">
              <h4>Lista de Usuarios</h4><br><br>

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Role ID</th>
                        <th scope="col">Nombre Rol</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Nombre Usuario</th>

                    </tr>
                </thead>


                <tbody>
                    @forelse ($usuarios as $usuario)
                    <tr>
                        <td>{{ $usuario->idusuario }}</td>
                        <td>{{ $usuario->role_id }}</td>
                        <td>{{ $usuario->nombrerol }}</td>
                        <td>{{ $usuario->email }}</td>
                        <td>{{ $usuario->name }}</td>


                    </tr>
                    @empty
                        <p>No hay tareas disponibles...</p>
                    @endforelse
                </tbody>
            </table>
            </div>


        </div>

@endsection

