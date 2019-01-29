<?php



require __DIR__ . '\vendor\autoload.php';
session_start();
$head = new \KCSG\HeaderFooter();
$head->header();
if(isset($_SESSION['logged']) && $_SESSION['logged'] == true){
}else{
    $_SESSION['post'] = true;
    header('location: login.php');
}
$foot = new \KCSG\HeaderFooter();
$foot->footer();

