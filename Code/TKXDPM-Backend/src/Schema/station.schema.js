


const Station = {
    id: 'station_id INT AUTO_INCREMENT PRIMARY KEY',
    name: 'name VARCHAR(255) NOT NULL',
    address: 'address VARCHAR(255) NOT NULL',
    bikeNumber: 'bike_number INT NOT NULL',
    emptySlot: 'empty_slot INT NOT NULL',
    area: 'area INT NOT NULL',
    distance: 'distance INT NOT NULL',
    time: 'time INT NOT NULL'
}

let createStationTableSQL =
    `CREATE TABLE station (${Station.id}, ${Station.name}, ${Station.address}, ${Station.bikeNumber}, ${Station.emptySlot}, ${Station.area}, ${Station.distance}, ${Station.time})`;


export default createStationTableSQL;

