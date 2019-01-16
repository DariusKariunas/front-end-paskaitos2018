<?php
namespace KCSG\Database;
class Handler
{

    private $Data;

    public function __construct()
    {
        $this->Data;
    }
    function handler(){
        if (!empty($_POST["name"])) {
            $this->Data['name'] = $_POST["name"];
        }
        if (!empty($_POST["email"])) {
            $this->Data['email'] = $_POST["email"];
        }
        if (!empty($_POST["username"])) {
            $this->Data['username'] = $_POST["username"];
        }
        if (!empty($_POST["password"])) {
            $this->Data['password'] = $_POST["password"];
        }
        if (!empty($_POST["password2"])) {
            $this->Data['password2'] = $_POST["password2"];
        }
        return $this->Data;
    }
}