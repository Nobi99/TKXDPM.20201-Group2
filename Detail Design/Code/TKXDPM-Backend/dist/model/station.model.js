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
 * @returns all station object
 */
var getAllStation = function getAllStation() {
  return new Promise(function (resolve, reject) {
    _database["default"].query("SELECT * FROM station", function (err, result) {
      if (err) throw err;else resolve(result);
    });
  });
};
/**
 * 
 * @param {Number} id 
 * @returns station object
 */


var getStationById = function getStationById(id) {
  return new Promise(function (resolve, reject) {
    _database["default"].query("SELECT * FROM station where station_id = " + id, function (err, result) {
      if (err) throw err;else resolve(result);
    });
  });
};

var getAvailableStation = function getAvailableStation() {
  return new Promise(function (resolve, reject) {
    _database["default"].query("SELECT * FROM station where empty_slot > 0", function (err, result) {
      if (err) throw err;else resolve(result);
    });
  });
};

var StationModel = {
  getAllStation: getAllStation,
  getStationById: getStationById,
  getAvailableStation: getAvailableStation
};
var _default = StationModel;
exports["default"] = _default;