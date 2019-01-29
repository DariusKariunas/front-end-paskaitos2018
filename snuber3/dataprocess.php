<?php

    require __DIR__ . '\vendor\autoload.php';



    $render = new KCSG\Database\Handler();
    $dbfunction =  new KCSG\Database\DBfunctions();
    $err = new KCSG\Database\Validation();
    $data = [];

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $data = $render->handler();
        $err->error;
        $err->validate($data);
        if (empty($err->error)){
            $dbfunction->insertProject_db($data);
            header('location: login.php');
        }else{
            $err->error();
        }
    }