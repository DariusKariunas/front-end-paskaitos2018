<?php
require __DIR__ . '\vendor\autoload.php';
session_start();
$head = new \KCSG\HeaderFooter();
$head->header();
$postRender = new KCSG\Database\Handler();
$function = new KCSG\Database\DBfunctions();
$err = new KCSG\Database\Validation();
if(isset($_SESSION['logged']) && $_SESSION['logged'] == true) {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $data = $postRender->posthandler();
        $err->posterror;
        $err->validatePost($data);
        if (empty($err->posterror)) {
            $function->insertProjectMarkers($data);
            echo "<div style='display: flex; color: red' class='justify-content-center'>"."Product has been added"."</div>";
        } else {
            echo "<div style='display: flex; color: red' class='justify-content-center'>";
            $err->posterror();
            echo "</div>";
        }
    }
}else if (!isset($_SESSION['logged'])){
    $_SESSION['post'] = true;
    header('location: login.php');
}
$postForm = new KCSG\AddPost();
$postForm->PostForm();
$foot = new \KCSG\HeaderFooter();
$foot->footer();