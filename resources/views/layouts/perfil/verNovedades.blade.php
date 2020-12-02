@extends('layouts.plantilla')

@section('content')
<br>
            <div class="row">
              <h4>Lista de Usuarios</h4><br><br>

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Ocurrencia</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>

                    </tr>
                </thead>


                <tbody>
                    @forelse ($novedades as $n)
                    <tr>
                        <td>{{ $n->fecha }}</td>
                        <td>{{ $n->nombre }}</td>
                        <td>{{ $n->nombreservicio  }}</td>
                        <td>{{ $n->descripcion }}</td>
                    </tr>
                    @empty
                        <p>No hay tareas disponibles...</p>
                    @endforelse
                </tbody>
            </table>
            </div>


        </div>

@endsection

