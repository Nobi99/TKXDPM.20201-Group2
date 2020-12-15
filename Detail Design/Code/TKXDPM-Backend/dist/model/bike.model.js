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
/**
 * Update bike when rent bike and return bike
 * @param {*}  stationId,
 * @param {*} bikeId Bike ID to find bike
 * @returns Promise
 */


var returnBike = function returnBike(_ref) {
  var stationId = _ref.stationId,
      bikeId = _ref.bikeId;
  var query = "UPDATE bike SET isRented = 0, station_id = " + stationId + " WHERE bike_id = " + bikeId;
  return new Promise(function (resolve, reject) {
    _database["default"].query(query, function (err, result) {
      if (err) throw err;else resolve(result);
    });
  });
};

var hiringBike = function hiringBike(bikeId) {
  var query = "UPDATE bike SET isRented = 1 WHERE bike_id = " + bikeId;
  return new Promise(function (resolve, reject) {
    _database["default"].query(query, function (err, result) {
      if (err) throw err;else resolve(result);
    });
  });
};

var BikeModel = {
  getAllBike: getAllBike,
  getBikeById: getBikeById,
  returnBike: returnBike,
  hiringBike: hiringBike
};
var _default = BikeModel;
exports["default"] = _default;