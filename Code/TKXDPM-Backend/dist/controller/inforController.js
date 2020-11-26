"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StationController = exports.BikeController = void 0;

require("regenerator-runtime/runtime");

var _bluebird = require("bluebird");

var _model = require("../model/model");

var _database = _interopRequireDefault(require("../config/database.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import StationModel from '../model/station.model';

/**
 * get All Bike in one Docking station
 * @param {*} dockingStationId 
 * @returns {Array} bike
 */
var getAllBike = /*#__PURE__*/function () {
  var _ref = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var stationId, kq;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            stationId = req.query.id;
            _context.next = 3;
            return _model.BikeModel.getAllBike(stationId);

          case 3:
            kq = _context.sent;
            console.log("Sending All Bike Object in a Station to Client");
            res.send({
              data: kq,
              status: 200
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllBike(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Get Bike by id
 * @param {*} bikeId 
 * @returns {Object} bike
 */


var getBike = /*#__PURE__*/function () {
  var _ref2 = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var bikeId, kq;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            bikeId = req.query.id;
            console.log("Sending a Bike Object to Client");
            _context2.next = 4;
            return _model.BikeModel.getBikeById(bikeId);

          case 4:
            kq = _context2.sent;
            res.send({
              data: kq,
              status: 200
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getBike(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Get all docking station
 * @returns {Array} Docking Station Array
 */


var getAllStation = /*#__PURE__*/function () {
  var _ref3 = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var kq;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log("Sending All Station Object to Client");
            _context3.next = 3;
            return _model.StationModel.getAllStation();

          case 3:
            kq = _context3.sent;
            res.send({
              data: kq,
              status: 200
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getAllStation(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Get Docking Station by id
 * @param {*} dockingStationId 
 * @returns {}
 */


var getStation = /*#__PURE__*/function () {
  var _ref4 = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var stationId, kq;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            stationId = req.query.id;
            _context4.next = 3;
            return _model.StationModel.getStationById(stationId);

          case 3:
            kq = _context4.sent;
            res.send({
              data: kq,
              status: 200
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getStation(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var BikeController = {
  getAllBike: getAllBike,
  getBike: getBike
};
exports.BikeController = BikeController;
var StationController = {
  getAllStation: getAllStation,
  getStation: getStation
};
exports.StationController = StationController;