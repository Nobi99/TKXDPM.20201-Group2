import connection from '../config/database.config';
// import Model from './model';

/**
 * @returns all station object
 */
const getAllStation = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM station", (err, result) => {
            if (err) throw err;
            else resolve(result);
        })
    })

}

/**
 * 
 * @param {Number} id 
 * @returns station object
 */

const getStationById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM station where station_id = ${id}`, (err, result) => {
            if (err) throw err;
            else resolve(result);
        })
    })

}

const StationModel = {
    getAllStation,
    getStationById
}

export default StationModel;