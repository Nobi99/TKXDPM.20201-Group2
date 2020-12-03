"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _database = _interopRequireDefault(require("../config/database.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Model from './model';

/**
 * @param {Number} station_id 
 * @returns {promise} array object
 */
var getAllBike = function getAllBike(station_id) {
  return new Promise(function (resolve, reject) {
    _database["default"].query("SELECT * FROM bike where isRented = 0 AND station_id = " + station_id, function (err, result, kq) {
      if (err) throw err;else resolve(result);
    });
  });
};
/**
 * 
 * @param {Number} id 
 * @returns bike object
 */


var getBikeById = function getBikeById(id) {
  return new Promise(function (resolve, reject) {
    _database["default"].query("SELECT * FROM bike where bike_id = " + id, function (err, result) {
      if (err) throw err;else resolve(result);
    });
  });
};

var updateBike = function updateBike(data) {
  var query = '';

  if (data.stationId != -1) {
    query = "UPDATE bike SET isRented = " + data.isRented + ", station_id = " + data.stationId + " WHERE bike_id = " + data.id;
  } else query = "UPDATE bike SET isRented = " + data.isRented + " WHERE bike_id = " + data.id;

  return new Promise(function (resolve, reject) {
    _database["default"].query(query, function (err, result) {
      if (err) throw err;else resolve(result);
    });
  });
};

var BikeModel = {
  getAllBike: getAllBike,
  getBikeById: getBikeById,
  updateBike: updateBike
};
var _default = BikeModel;
exports["default"] = _default;