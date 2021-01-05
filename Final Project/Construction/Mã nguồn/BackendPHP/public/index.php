<?php
    require "../bootstrap.php";
    use Src\Controller\BikeController;
    use Src\Controller\StationController;
    use Src\Controller\TransactionController;

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $uri = explode( '/', $uri );

    // all of our endpoints start with /api
    // everything else results in a 404 Not Found
    if ($uri[1] !== 'api') {
        header("HTTP/1.1 404 Not Found");
        exit();
    }
    
    $service = $uri[2];
    $fn = $uri[3];
    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $bikeController = new BikeController();
    $stationController = new StationController();
    $transactionController = new TransactionController();


    switch ($service) {
        case "bike":
            if($fn === 'get-all' && $requestMethod === 'GET' && isset($_GET['stationId'])) {
                $stationId = $_GET['stationId'];
                $bikeController->getAllBike($stationId);
            }

            else if($fn === 'get-bike' && $requestMethod === 'GET' && isset($_GET['bikeId'])) {
                $bikeId = $_GET['bikeId'];
                $bikeController->getBikeById($bikeId);
            }

            else if($fn === 'update' && $requestMethod === "POST") {
                echo $_POST['bikeId'];
            }
            else header("HTTP/1.1 404 Not Found");
            break;
        case "station":
            if($fn === 'get-all' && $requestMethod === 'GET') {
                $stationController->getAllStation();
            }
            else if($fn === 'get-station' && $requestMethod === 'GET' && isset($_GET['stationId'])) {
                $stationId = $_GET['stationId'];
                $stationController->getStationById($stationId);
            }

            else if($fn === 'get-available' && $requestMethod === 'GET') {
                $stationController->getAvailableStation();
            }
            break;
        case "card":
            break;
        case "transaction":
            if($fn === 'add' && $requestMethod === 'POST') {
                $transactionController->addTransaction();
            }

            else if($fn === 'update' && $requestMethod === 'POST') {
                $transactionController->updateTransaction();
            }
            break;
        default:
            header("HTTP/1.1 404 Not Found");
            exit();
    }
    

    // the stationId must be a number
    // $stationId = null;
    // if (isset($uri[2])) {
    //     $stationId = (int) $uri[2];
    // }

    // if(isset($_GET['stationId'])) {
    //     $stationId = $_GET['stationId'];
    // }


    // // pass the request method and user ID to the PersonController and process the HTTP request:
    // $controller = new BikeController($requestMethod, $stationId);
    // $controller->processRequest();
