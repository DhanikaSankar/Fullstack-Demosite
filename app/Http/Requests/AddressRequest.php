<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddressRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'address1'=>'nullable',
            'address2'=>'nullable',
            'address3'=>'nullable',
            'address4'=>'nullable',
            'address5'=>'nullable',
            'address6'=>'nullable',
            'address7'=>'nullable',
            'address8'=>'nullable',
            'address9'=>'nullable',
        ];
    }
}
