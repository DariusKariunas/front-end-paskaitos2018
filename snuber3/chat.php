<?php
require __DIR__ . '\vendor\autoload.php';
session_start();
echo "promt('enter your name')";
header('location: index.php');
