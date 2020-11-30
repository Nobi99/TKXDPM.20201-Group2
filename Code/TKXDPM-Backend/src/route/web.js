'use strict'
import express from 'express';
import { BikeController, StationController } from '../controller/inforController';
import {
    addTransaction,
    updateTransaction
} from '../controller/paymentController';

let router = express.Router();

/**
 * Init all router
 * @param app from exactly express modul
 */

const initRouter = (app) => {
    router.get('/api/infor/all-bike', BikeController.getAllBike);
    router.get('/api/infor/bike', BikeController.getBike);
    router.get('/api/infor/all-station', StationController.getAllStation);
    router.get('/api/infor/station', StationController.getStation);
    router.get('/api/infor/get-available-station', StationController.getAvailableStation);
    router.post('/api/transaction/add', (req, res) => {
        res.send(req.body);
    });
    router.post('/api/transaction/update', updateTransaction);
    app.use('/', router);
}

export default initRouter;