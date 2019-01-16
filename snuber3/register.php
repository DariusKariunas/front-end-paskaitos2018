<?php
require __DIR__ . '\vendor\autoload.php';
session_start();
$log = new Monolog\Logger('name');
$log->pushHandler(new Monolog\Handler\StreamHandler('app.log',Monolog\Logger::WARNING));
$log->addWarning('Foo');
$log->err('error');
$head = new \KCSG\HeaderFooter();
$head->header();
$render = new KCSG\Database\Handler();
$dbfunction = new KCSG\Database\DBfunctions();
$err = new KCSG\Database\Validation();
try {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $data = $render->handler();
        $err->error;
        $err->validate($data);
        if (empty($err->error)) {
            $dbfunction->insertProject_db($data);
            header('location: login.php');
        } else {
            echo "<div style='display: flex; color: red' class='justify-content-center'>";
            $err->error();
            echo "</div>";
        }
    }
}catch(\Exception $e){
    echo $e;
}
$err = new KCSG\Database\Validation();
$err->error();
$reg = new KCSG\Register();
$reg->register();
$foot = new \KCSG\HeaderFooter();
$foot->footer();