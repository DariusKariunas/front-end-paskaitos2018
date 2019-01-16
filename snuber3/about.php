<?php
require __DIR__ . '\vendor\autoload.php';
session_start();
$head = new \KCSG\HeaderFooter();
$head->header();
$about = new KCSG\AboutUs();
$about->aboutUs();
$foot = new \KCSG\HeaderFooter();
$foot->footer();