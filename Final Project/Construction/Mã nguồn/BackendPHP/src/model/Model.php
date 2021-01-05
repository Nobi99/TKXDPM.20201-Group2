<?php
    namespace Src\Model;
    use Src\Config\ConnectionDB;

    class Model {
        protected $tableName;
 
        //constructor
        public function __construct($tableName) {
            $this->tableName = $tableName;
        }

        // function to get data by id
        public function findById($id) {
            $state = "SELECT * FROM " . $this->tableName . " WHERE " . $this->tableName . "_id = " . $id;
            return $this->queryAndReturn($state);
        }

        //function get all 

        public function getAll() {
            $state = "SELECT * FROM " . $this->tableName;
            return $this->queryAndReturn($state);
        }



        /**
         * Function to prepare connect to database, query to db and return the result
         * @param {String} statement to query to db
         * @return {Object} $result 
         */

        public function queryAndReturn($state) {
            $connection = ConnectionDB::getConnection();
            try {
                $state = $connection->query($state);
                $result = $state->fetchAll(\PDO::FETCH_ASSOC);
                return $result;
            } catch (\PDOException $e) {
                exit($e->getMessage());
            }
        }
    }