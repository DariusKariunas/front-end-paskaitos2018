<?php
require __DIR__ . '\vendor\autoload.php';
session_start();
$head = new \KCSG\HeaderFooter();
$head->header();
$about = new KCSG\AboutUs();
$about->aboutUs();
$foot = new \KCSG\HeaderFooter();
$foot->footer();
if(isset($_SESSION['post']) && $_SESSION['post'] == true){
    session_unset();
}