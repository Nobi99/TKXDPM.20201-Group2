<?php

    namespace Src\Controller;
    use Src\Model\TransactionModel;
    use Src\Model\BikeModel;

    class TransactionController extends Controller {
    private $transactionModel;

    public function __construct() {
        $this->transactionModel = new TransactionModel();
    }

    public function addTransaction() {
        $entityBody = file_get_contents('php://input');
        $arr = json_decode($entityBody, true);
        if(isset($_POST['username']) && isset($_POST['bikeId']) && isset($_POST['createdAt']) && isset($_POST['userId'])) {
            $username = $_POST['username'];
            $bikeId = $_POST['bikeId'];
            $createdAt = $_POST['createdAt'];
            $userId = $_POST['userId'];
            $insertedId = $this->transactionModel->add($username, $userId, $createdAt, $bikeId);
            $bikeModel = new BikeModel();
            $bikeModel->hiringBike($bikeId);
            parent::makeFoundedRequest($insertedId);
        }
        // var_dump($arr);
        // $result = $this->transactionModel->add($arr["username"], $arr["userId"], $arr["createdAt"], $arr["bikeId"]);

        else parent::makeNotFoundRequest();
    }

    public function updateTransaction() {
        if(isset($_POST['fee']) && isset($_POST['transactionId']) && isset($_POST['endAt'])) {
            $fee = $_POST['fee'];
            $transactionId = $_POST['transactionId'];
            $endAt = $_POST['endAt'];
            $result = $this->transactionModel->update($fee, $transactionId, $endAt);
            parent::makeFoundedRequest($result);
        }
        else parent::makeNotFoundRequest();
    }

}
