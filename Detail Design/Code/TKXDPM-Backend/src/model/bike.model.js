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
 * 
 * @param {*} data 
 * @returns Promise
 */

const updateBike = (data) => {
    let query = '';
    if (data.stationId != -1) {
        query = `UPDATE bike SET isRented = ${data.isRented}, station_id = ${data.stationId} WHERE bike_id = ${data.id}`
    }
    else query = `UPDATE bike SET isRented = ${data.isRented} WHERE bike_id = ${data.id}`
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
    updateBike
}

export default BikeModel;