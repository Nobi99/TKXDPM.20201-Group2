<?php

    namespace Src\Model;
    use Src\Config\ConnectionDB;

    class StationModel extends Model {
        public function __construct() {
            parent::__construct("station");
        }

        public function findAvalable() {
            $state = "SELECT * FROM station WHERE empty_slot > 0";

            return parent::queryAndReturn($state);
        }
    }
