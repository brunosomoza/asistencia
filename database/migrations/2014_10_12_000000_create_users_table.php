<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('roles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre')->nullable();
            $table->string('codigo')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });

        // Tabla para almacenar los Grados de Cadetes 
        Schema::create('sections', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre')->nullable();
            $table->text('codigo')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });


        // Tabla para almacenar los Lugares: PB1, Garita 
        Schema::create('places', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre')->nullable();
            $table->text('codigo')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });


        Schema::create('status', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre')->nullable();
            $table->text('codigo')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });

        // Tabla Usuarios
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('role_id')->nullable();
            $table->foreign('role_id')->references('id')->on('roles');

            $table->unsignedInteger('section_id')->nullable();
            $table->foreign('section_id')->references('id')->on('sections');
       
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('name')->nullable();
            $table->integer('puntos')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });


        Schema::create('services', function (Blueprint $table) {
            $table->increments('id');


            $table->timestamp('fecha')->nullable();

            $table->unsignedInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');

            $table->unsignedInteger('place_id')->nullable();
            $table->foreign('place_id')->references('id')->on('places');




            $table->string('nombre');
            $table->integer('puntos');

            $table->timestamps();
        });




// olda
    //     Schema::create('roles', function (Blueprint $table) {
    //         $table->unsignedInteger('id');
    //         $table->string('nombre');
    //         $table->string('codigo');
    //         $table->string('descripcion');

    // });

    //     Schema::create('users', function (Blueprint $table) {
    //         $table->id();

    //         $table->unsignedInteger('role_id');
    //         $table->foreign('role_id')->references('id')->on('roles');

    //         $table->string('name');
    //         $table->string('email')->unique();
    //         $table->timestamp('email_verified_at')->nullable();
    //         $table->string('password');
    //         $table->rememberToken();
    //         $table->timestamps();
    //         $table->string('nombre');
    //     });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}




