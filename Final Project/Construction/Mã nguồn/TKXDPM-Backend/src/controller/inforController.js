import { BikeModel, StationModel } from '../model/model';
import connection from '../config/database.config';

// import StationModel from '../model/station.model';

/**
 * get All Bike in one Docking station
 * @param {*} dockingStationId 
 * @returns {Array} bike
 */

const getAllBike = async (req, res) => {
    let stationId = req.query.id;
    const kq = await BikeModel.getAllBike(stationId);
    console.log("Sending All Bike Object in a Station to Client");
    res.send({ data: kq, status: 200 });
}


/**
 * Get Bike by id
 * @param {*} bikeId 
 * @returns {Object} bike
 */
const getBike = async (req, res) => {
    let bikeId = req.query.id;
    console.log("Sending a Bike Object to Client");
    const kq = await BikeModel.getBikeById(bikeId);
    res.send({ data: kq, status: 200 });
}

/**
 * Get all docking station
 * @returns {Array} Docking Station Array
 */

const getAllStation = async (req, res) => {
    console.log("Sending All Station Object to Client");
    const kq = await StationModel.getAllStation();
    res.send({ data: kq, status: 200 });
}


/**
 * Get Docking Station by id
 * @param {*} dockingStationId 
 * @returns {}
 */

const getStation = async (req, res) => {
    let stationId = req.query.id;
    const kq = await StationModel.getStationById(stationId);
    res.send({ data: kq, status: 200 });

}

/**
 * Get Stations have empty slot to return bike
 * @param {*} req 
 * @param {*} res 
 */

const getAvailableStation = async (req, res) => {
    try {
        const kq = await StationModel.getAvailableStation();
        res.send({ data: kq, status: 200 });
    }
    catch (err) {
        console.log(err);
    }
}



const BikeController = {
    getAllBike,
    getBike
}

const StationController = {
    getAllStation,
    getStation,
    getAvailableStation
}

export {
    BikeController,
    StationController
}