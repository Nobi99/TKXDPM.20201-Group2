const createTable = "CREATE TABLE";
const bikeId = 'bike_id INT AUTO_INCREMENT PRIMARY KEY';
const bikeType = 'bike_type VARCHAR(255) NOT NULL';
const stationId = 'station_id INT';
const position = 'position INT NOT NULL';
const foreignKey = 'FOREIGN KEY (station_id) REFERENCES station(station_id)';

let createBikeTableSQL =
    `${createTable} bike (${bikeId}, ${bikeType}, battery INT DEFAULT -1, bike_value INT NOT NULL, isRented TINYINT DEFAULT 0,${stationId}, ${position}, ${foreignKey}, code INT NOT NULL)`;

//     "CREATE TABLE bike (bike_id INT AUTO_INCREMENT PRIMARY KEY, bike_type INT NOT NULL, batery INT DEFAULT 1, bike_value INT NOT NULL, isRented TINYINT DEFAULT 0, station_id INT, position INT NOT NULL UNIQUE)";

export default createBikeTableSQL;