<?php
require __DIR__ . '\vendor\autoload.php';
session_start();
$head = new \KCSG\HeaderFooter();
$head->header();
$postForm = new KCSG\AddPost();
$postForm->PostForm();
$foot = new \KCSG\HeaderFooter();
$foot->footer();
