@extends('layouts.base')

@section('contenido')
         <div class="content-wrapper">
            <div class="content-heading">
               <div>Registro de Cadetes<small>Creacion de Usuarios</small></div>
            </div>
            <div class="row">
               <div class="col-md-6">
                  <!-- START card-->
                  <div class="card card-default">
                     <div class="card-header">Stacked form</div>
                     <div class="card-body">
                        <form method="POST" action="{{ route('guardarCadete') }}">
                           @csrf
                           <div class="form-group">
                              <label>Nombre</label>
                              <input class="form-control" type="text" id="nombreCadete"  name="nombreCadete" placeholder="Enter email">
                           </div>
                          <div class="form-group">
                            <label for="dniCadete">Correo electronico</label>
                            <input type="text" class="form-control" id="dniCadete" name="dniCadete" placeholder="*****@hotmail.com">
                          </div>
                           <div class="form-group">
                              <label>Grado del Cadete</label>
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
                  </div><!-- END card-->
               </div>
               <div class="col-md-6">
                  <!-- START card-->
<!-- END card-->
               </div>
            </div>
         </div>

@endsection