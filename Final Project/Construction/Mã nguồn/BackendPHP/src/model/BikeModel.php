<?php

    namespace Src\Model;
    use Src\Config\ConnectionDB;

    class BikeModel extends Model {
        
        public function __construct() {
            parent::__construct("bike");
        }
        
        /**
         * Get all bike from one Station 
         * @param {Number} station ID 
         */
        
        public function getAllBike($stationId) {
            $state = "SELECT * FROM bike WHERE station_id = " . $stationId . " AND isRented = 0";
            // function queryAndReturn() return the result from querying state from the db
            return parent::queryAndReturn($state);
        }


        public function hiringBike($bikeId) {
            $state = 'UPDATE bike SET isRented = 1 WHERE bike_id =' . $bikeId;
            // function queryAndReturn() return the result from querying state from the db
            return parent::queryAndReturn($state);
        }

        public function returnBike($bikeId, $stationId) {
            $state = 'UPDATE bike SET isRented = 0, station_id = '. $stationId .' WHERE bike_id =' . $bikeId;
            // function queryAndReturn() return the result from querying state from the db
            return parent::queryAndReturn($state);
        }
    }
