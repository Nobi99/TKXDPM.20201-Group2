<?php
    namespace Src\Controller;

    class Controller {

        public function __construct() {

        }

        public function makeNotFoundRequest() {
            header("HTTP/1.1 404 Not Found");
            $response['status'] = "404";
            $jsonRes = json_encode($response);
            echo $jsonRes;
        }

        public function makeFoundedRequest($result) {
            header("HTTP/1.1 200 OK");
            $response['data'] = $result;
            $response['status'] = "OK";
            $jsonRes = json_encode($response);
            echo $jsonRes;
        }
    }