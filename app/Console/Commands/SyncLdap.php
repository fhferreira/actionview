<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\ActiveDirectory\Eloquent\Directory;
use App\ActiveDirectory\LDAP;

use DB;
use Exception;

class SyncLdap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ldap:sync';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $configs = [];

        $directories = UserDirectory::where('type', 'LDAP')
            ->where('status', 'active')
            ->where('invalide_flag', '<>', 1)
            ->get();

        foreach($directories as $d)
        {
            $configs[ $d->id ] = $d->configs;
        }

        LDAP::sync($configs);
    }
}
