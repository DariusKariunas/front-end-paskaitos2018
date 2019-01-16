<?php

require __DIR__ . '\vendor\autoload.php';

    session_start();
    $head = new \KCSG\HeaderFooter();
    $head->header();

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $uname = $_POST['username'];
        $getdata = new KCSG\Database\DBfunctions();
        $array = $getdata->getDataByUsername($uname);
        if ($_POST['username'] !== $array['username']) {
        echo "<div style='display: flex; color:red' class='justify-content-center'>There is no user with this username</div>>";
        }

        if ($_POST['username'] == $array['username']) {
            if ($_POST['password'] !== $array['password']) {
              echo "<div style='display: flex; color:red' class='justify-content-center'>Wrong password</div>>";
              } else {
                    $_SESSION['id'] = $array['id'];
                    $_SESSION['logged'] = true;
                    header('location: index.php');
               }
        }
    }
    if (isset($_SESSION['logged']) && $_SESSION['logged'] == true) {
        if ($_POST['username'] == 'kill') {
            echo "loggedout" . $_SESSION['id'];
            session_unset();
            session_destroy();
    }
}
    $log = new KCSG\Login();
    $log->login();
    $foot = new \KCSG\HeaderFooter();
    $foot->footer();