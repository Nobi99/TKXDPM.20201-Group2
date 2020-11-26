import connection from '../config/database.config';
// import Model from './model';

/**
 * 
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

const BikeModel = {
    getAllBike,
    getBikeById,
}

export default BikeModel;