<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    use HasFactory;

    protected $primaryKey = 'user_info_id';

    protected $table = 'user_info';

    protected $fillable = ['user_id','ip_address','device_type','browser','user_agent'];
}
