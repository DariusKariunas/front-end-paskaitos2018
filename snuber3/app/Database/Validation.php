<?php
/**
 * Created by PhpStorm.
 * User: Turbo
 * Date: 2019-01-15
 * Time: 18:16
 */

namespace KCSG\Database;


class Validation
{
    public $error;
    public function __construct()
    {
        $this->error = [];
    }
    public function validate($value)
    {


            if (!preg_match("/^[a-zA-Z ]*$/", $value["name"])) {
                array_push($this->error, 'Name must contain only letters');
            }
            else{
            if (empty($value['name'])) {
                array_push($this->error, 'Name is required');
            }
            }
            if (empty($value['email'])) {
                array_push($this->error, 'Email is required');

            } else {
                if (!filter_var($value["email"], FILTER_VALIDATE_EMAIL)) {
                array_push($this->error, 'Invalid email');
            }}
            if (empty($value['username'])) {
                array_push($this->error, 'Username is required');
            }
            if (empty($value['password'])) {
                      array_push($this->error, 'Password is required');
                }else {
                if (empty($value['password2'])) {
                    array_push($this->error, 'Repeat passwor');
                } else {
                    if ($value['password'] != $value['password2']) {
                        array_push($this->error, 'Passwords do not match');
                    }
                }
            }
    }
    public function error(){
        if (count($this->error) > 0){
            echo "<div>";
            foreach ($this->error as $value){
                echo "<p>$value</p>";
            }
            echo "</div>";
        }
    }
}