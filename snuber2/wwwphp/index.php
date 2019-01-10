<?php



try{

        function showAllGoods()
    {
        $connection = new PDO("mysql:host=localhost;dbname=project", "darius", "slaptazodis");
        $stmt = $connection->prepare("SELECT * FROM project_db");
        $stmt->execute();
        $stmt->setFetchMode(\PDO::FETCH_ASSOC);

        return $stmt->fetchAll();
    }
    $json = showAllGoods();

    echo json_encode($json);

}catch (\Exception $e){
    echo $e;
}