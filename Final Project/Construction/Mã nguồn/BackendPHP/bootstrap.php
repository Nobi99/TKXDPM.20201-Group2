<?php

    require 'vendor/autoload.php';
    use Dotenv\Dotenv;
    use Src\Config\ConnectionDB;
    require 'src/config/ConnectionDB.php';

    $dotenv = new DotEnv(__DIR__);
    $dotenv->load();

    $connectionDB = (new ConnectionDB())->getConnection();
    // echo getenv('OKTAAUDIENCE');