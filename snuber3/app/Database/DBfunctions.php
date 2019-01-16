<?php
namespace KCSG\Database;
class DBfunctions
{
    private $host;
    private $dbname;
    private $user;
    private $password;
    private $conn;
    public function __construct(
        $host = 'localhost',
        $dbname = 'project',
        $user = 'darius',
        $password = 'slaptazodis'
    )
    {
        $this->host = $host;
        $this->dbname = $dbname;
        $this->user = $user;
        $this->password = $password;
        if (!$this->conn){
            $this->conn = new \PDO("mysql:host=$host; dbname=$dbname", $user, $password);
        }
    }
    public function updateProject_db(Project_db $project_db){
        $stmt = $this->conn->prepare("UPDATE project_dbdb SET name = :name, email= :email, username= :username, password= :password WHERE id = :id;");
        $stmt->bindValue(':fname', $project_db->getName());
        $stmt->bindValue(':lname', $project_db->getUsername());
        $stmt->bindValue(':email', $project_db->getEmail());
        $stmt->bindValue(':phone', $project_db->getPassword());
        $stmt->bindValue(':id', $project_db->getId());
        $stmt->execute();
    }
    public function getDataById($id)
    {
        $stmt = $this->conn->prepare("SELECT * FROM project_dbdb WHERE id = $id");
        $stmt->execute();
        $stmt->setFetchMode(\PDO::FETCH_ASSOC);
        return $stmt->fetch();
    }
    public function getDataByUsername($username)
    {
        $stmt = $this->conn->prepare("SELECT * FROM project_dbdb WHERE username = '$username'");
        $stmt->execute();
        $stmt->setFetchMode(\PDO::FETCH_ASSOC);
        return $stmt->fetch();
    }
    public function insertProject_db(array $mas){
        $stmt = $this->conn->prepare("INSERT INTO project_dbdb (name,email,username,password) VALUES ( :name, :email, :username, :password)");
        $stmt->bindValue(':name', $mas['name']);
        $stmt->bindValue(':email', $mas['email']);
        $stmt->bindValue(':username', $mas['username']);
        $stmt->bindValue(':password', $mas['password']);
        $stmt->execute();
    }
    public function insertProjectMarkers(array $value){
        $stmt = $this->conn->prepare("INSERT INTO project_markers (user_id, product_name, description, img, address, city) VALUES ( :user_id, :product_name, :description, :img, :address, :city)");
        $stmt->bindValue(':user_id', $_SESSION['id']);
        $stmt->bindValue(':product_name', $value['product_name']);
        $stmt->bindValue(':description', $value['description']);
        $stmt->bindValue(':img', $value['img']);
        $stmt->bindValue(':address', $value['address']);
        $stmt->bindValue(':city', $value['city']);
        $stmt->execute();
    }
    public function getMarkers(){
        $stmt = $this->conn->prepare("SELECT * FROM project_markers");
        $stmt->execute();
        $stmt->setFetchMode(\PDO::FETCH_ASSOC);
        return $stmt->fetchAll();
    }
}