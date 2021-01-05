<?php

    namespace Src\Model;
    use Src\Config\ConnectionDB;


    class TransactionModel extends Model {
        public function __construct() {
            parent::__construct("transaction");
        }

        

        public function setFee($fee) {
            $this->fee = $fee;
        }

        public function setEndAt($endAt) {
            $this->endAt = $endAt;
        }

        public function add($username, $userId, $createdAt, $bikeId) {
            $state = 'INSERT INTO transaction (username, bike_id, created_at, user_id) 
                VALUES ( "'. $username .'", ' . $bikeId .', "'. $createdAt .'" , '. $userId .' )';
            $connection = ConnectionDB::getConnection();
            try {
                $state = $connection->query($state);
                $result = $state->fetchAll(\PDO::FETCH_ASSOC);
                return $connection->lastInsertId();
            } catch (\PDOException $e) {
                exit($e->getMessage());
            }
            
        }

        public function update($fee, $transactionId, $endAt) {
            $state = 'UPDATE transaction SET fee = ' . $fee . ', end_at = ' . $endAt . ' WHERE transaction_id = ' . $transactionId;  
            return parent::queryAndReturn($state);
        }
    }
