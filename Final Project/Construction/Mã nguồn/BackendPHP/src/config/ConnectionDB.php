<?php
    namespace Src\Config;
    use Dotenv\Dotenv;

    class ConnectionDB {
        private static $connection = null;

        public static function getConnection() {

            if(self::$connection === null) {

                $host = getenv('DB_HOST');
                $port = getenv('DB_PORT');
                $db = getenv('DB_DATABASE');
                $user = getenv('DB_USERNAME');
                $password = getenv('DB_PASSWORD');
    
                try {
                    self::$connection = new \PDO("mysql:host=$host;port=$port;charset=utf8mb4;dbname=$db",$user, $password);                    
                } catch (\PDOException $e) {
                    exit($e->getMessage()); 
                }
            }
            return self::$connection;
        }
    }