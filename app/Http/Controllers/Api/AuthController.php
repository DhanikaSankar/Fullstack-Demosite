<?php

namespace App\Http\Controllers\Api;

use App\Helpers\UserSystemInfoHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\AddressRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use App\Models\UserAddress;
use App\Models\UserInfo;
use Illuminate\Http\Request;


class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $data   =   $request->validated();
        $dob    =   $data['year'] . '/' . $data['month'] . '/' . $data['day'];
        $user   =   User::create([
            'first_name' =>  $data['first_name'],
            'last_name'  =>  $data['last_name'],
            'email'      =>  $data['email'],
            'phone'      =>  $data['phone'],
            'dob'        =>  $dob,
        ]);

        $token    = $user->createToken('main')->plainTextToken;
        $clientIP      = request()->ip();
        $userAgent     = request()->userAgent();
        // $clientIP      = UserSystemInfoHelper::get_ip();
        $clientBrowser = UserSystemInfoHelper::get_browsers();
        $clientDevice  = UserSystemInfoHelper::get_device();

        $userInfo = UserInfo::create([
            'user_id'     => $user['user_id'],
            'ip_address'  => $clientIP,
            'device_type' => $clientDevice,
            'browser'     => $clientBrowser,
            'user_agent'  => $userAgent,
        ]);

        return response(compact('user', 'token'));
    }

    public function save(AddressRequest $request, $id)
    {
        $data = $request->validated();
        $address1 = $data['address1'] . ' ' . $data['address2'] . ' ' . $data['address3'];
        $address2 = $data['address4'] . ' ' . $data['address5'] . ' ' . $data['address6'];
        $address3 = $data['address7'] . ' ' . $data['address8'] . ' ' . $data['address9'];

        $address =  UserAddress::create([
            'user_id' => $id,
            'previous_address_1' => $address1,
            'previous_address_2' => $address2,
            'previous_address_3' => $address3,
        ]);

        return response(compact('address', 'id'));
    }
}
