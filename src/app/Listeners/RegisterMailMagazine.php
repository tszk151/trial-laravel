<?php

namespace App\Listeners;

use App\Events\UserRegistered;
use App\Models\MailMagazine;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class RegisterMailMagazine
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  UserRegistered  $event
     * @return void
     */
    public function handle(UserRegistered $event)
    {
        MailMagazine::subscribe($event->user->email);
    }
}
