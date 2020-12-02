<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'fecha', 'novedad', 'nombre',
    ];
}
