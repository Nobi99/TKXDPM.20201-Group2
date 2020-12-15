import connection from '../config/database.config';
// import Model from './model';

/**
 * @param {Number} station_id 
 * @returns {promise} array object
 */
const getAllBike = (station_id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM bike where isRented = 0 AND station_id = ${station_id}`, (err, result, kq) => {
            if (err) throw err;
            else resolve(result);
        });
    })
}

/**
 * 
 * @param {Number} id 
 * @returns bike object
 */

const getBikeById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM bike where bike_id = ${id}`, (err, result) => {
            if (err) throw err;
            else resolve(result);
        });
    });
}

/**
 * Update bike when rent bike and return bike
 * @param {*}  stationId,
 * @param {*} bikeId Bike ID to find bike
 * @returns Promise
 */

const returnBike = ({ stationId, bikeId }) => {
    let query = `UPDATE bike SET isRented = 0, station_id = ${stationId} WHERE bike_id = ${bikeId}`;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) throw err;
            else resolve(result);
        });
    });
}

const hiringBike = (bikeId) => {
    let query = `UPDATE bike SET isRented = 1 WHERE bike_id = ${bikeId}`;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) throw err;
            else resolve(result);
        });
    });
}


const BikeModel = {
    getAllBike,
    getBikeById,
    returnBike,
    hiringBike
}

export default BikeModel;