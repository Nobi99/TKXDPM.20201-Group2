<?php
    namespace Src\Controller;
    use Src\Model\StationModel;


    class StationController extends Controller {
        private $stationModel;

        public function __construct() {
            $this->stationModel = new StationModel();
        }

        public function getAllStation() {
            $result = $this->stationModel->getAll();
            if($result != null) {
                parent::makeFoundedRequest($result);
            }
            else parent::makeNotFoundRequest();
        }

        public function getStationById($id) {
            $result = $this->stationModel->findById($id);
            if($result != null) {
                parent::makeFoundedRequest($result);
            }
            else parent::makeNotFoundRequest();
        }

        public function getAvailableStation() {
            $result = $this->stationModel->findAvalable();
            if($result != null) {
                parent::makeFoundedRequest($result);
            }
            else parent::makeNotFoundRequest();
        }

    }