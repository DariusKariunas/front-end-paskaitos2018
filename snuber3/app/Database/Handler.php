<?php
namespace KCSG\Database;
class Handler
{
    private $Data;
    private $postData;
    public function __construct()
    {
        $this->Data;
        $this->postData;
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
    function posthandler() {
        if (!empty($_POST["product_name"])) {
            $this->postData['product_name'] = $_POST["product_name"];
        }
        if (!empty($_POST["description"])) {
            $this->postData['description'] = $_POST["description"];
        }
        if (!empty($_POST["address"])) {
            $this->postData['address'] = $_POST["address"];
        }
        if (!empty($_POST["city"])) {
            $this->postData['city'] = $_POST["city"];
        }
        if (!empty($_POST["img"])) {
            $this->postData['img'] = $_POST["img"];
        }
        if(!empty($_SESSION['id'])){
            $this->postData['user_id'] = $_SESSION['id'];
        }
        return $this->postData;
    }
}