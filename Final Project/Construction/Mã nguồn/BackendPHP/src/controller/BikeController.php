<?php
namespace Src\Controller;

use Src\Model\BikeModel;


class BikeController extends Controller {
    private $bikeModel;
    public function __construct() {
        $this->bikeModel = new BikeModel();
    }
    
    public function getAllBike($stationId) {
        if(is_numeric($stationId)) {
            $result = $this->bikeModel->getAllBike($stationId);
            if($result != null) {
                parent::makeFoundedRequest($result);
            } 
            else parent::makeNotFoundRequest();
        }

        else parent::makeNotFoundRequest();
    }

    public function getBikeById($bikeId) {
        $result = $this->bikeModel->findById($bikeId);
        if($result != null) {
            parent::makeFoundedRequest($result);
        }

        else {
            parent::makeNotFoundRequest();
        }
    }

    public function setBikeIsRented($bikeId) {
        
    }

}