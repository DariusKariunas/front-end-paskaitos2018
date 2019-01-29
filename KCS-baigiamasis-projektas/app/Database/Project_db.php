<?php
namespace KCSG\Database;
class Validation
{
    public $error;
    public $posterror;
    public function __construct()
    {
        $this->error = [];
        $this->posterror= [];
    }
    public function validate($value){
        if (!preg_match("/^[a-zA-Z ]*$/", $value["name"])) {
            array_push($this->error, 'Name must contain only letters');
        }
        if (!empty($value['email']) && !filter_var($value["email"], FILTER_VALIDATE_EMAIL)) {
            array_push($this->error, 'Invalid email');
        }
        if (empty($value['name'])){
            array_push($this->error, 'Name is required');
        }
        if (empty($value['email'])){
            array_push($this->error, 'Email is required');
        }
        if (empty($value['username'])){
            array_push($this->error, 'Username is required');
        }
        if (empty($value['password'])){
            array_push($this->error, 'Password is required');
        }
        if ($value['password'] != $value['password2']){
            array_push($this->error, 'Passwords do not match');
        }
    }
    public function error(){
        if (count($this->error) > 0){
            echo "<div>";
            foreach ($this->error as $value){
                echo "  $value" . ";" . "  ";
            }
            echo "</div>";
        }
    }
    public function validatePost(){
        if (empty($value["product"])){
            array_push($this->posterror, 'Product is required');
        }
        if (empty($value['description'])){
            array_push($this->posterror, 'Description is required');
        }
        if (empty($value['city'])){
            array_push($this->posterror, 'City is required');
        }
        if (empty($value['zipcode'])){
            array_push($this->posterror, 'Zipcode is required');
        }
    }
    public function posterror(){
        if (count($this->posterror) > 0){
            echo "<div>";
            foreach ($this->posterror as $value){
                echo $value . ";". "  ";
            }
            echo "</div>";
        }
    }
}