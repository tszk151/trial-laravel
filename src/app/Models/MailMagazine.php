<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MailMagazine extends Model
{
    protected $fillable = [
        'email',
    ];

    /**
     * subscribe email
     *
     * @param string $email
     * @return MailMagazine
     */
    public static function subscribe($email): MailMagazine
    {
        return self::create([
            'email' => $email
        ]);
    }
}
