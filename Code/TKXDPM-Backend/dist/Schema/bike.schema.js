"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var createTable = "CREATE TABLE";
var bikeId = 'bike_id INT AUTO_INCREMENT PRIMARY KEY';
var bikeType = 'bike_type VARCHAR(255) NOT NULL';
var stationId = 'station_id INT';
var position = 'position INT NOT NULL';
var foreignKey = 'FOREIGN KEY (station_id) REFERENCES station(station_id)';
var createBikeTableSQL = createTable + " bike (" + bikeId + ", " + bikeType + ", battery INT DEFAULT -1, bike_value INT NOT NULL, isRented TINYINT DEFAULT 0," + stationId + ", " + position + ", " + foreignKey + ")"; //     "CREATE TABLE bike (bike_id INT AUTO_INCREMENT PRIMARY KEY, bike_type INT NOT NULL, batery INT DEFAULT 1, bike_value INT NOT NULL, isRented TINYINT DEFAULT 0, station_id INT, position INT NOT NULL UNIQUE)";

var _default = createBikeTableSQL;
exports["default"] = _default;