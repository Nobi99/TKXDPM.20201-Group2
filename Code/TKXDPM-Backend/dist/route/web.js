'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _inforController = require("../controller/inforController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/**
 * Init all router
 * @param app from exactly express modul
 */


var initRouter = function initRouter(app) {
  router.get('/api/infor/all-bike', _inforController.BikeController.getAllBike);
  router.get('/api/infor/bike', _inforController.BikeController.getBike);
  router.get('/api/infor/all-station', _inforController.StationController.getAllStation);
  router.get('/api/infor/station', _inforController.StationController.getStation);
  app.use('/', router);
};

var _default = initRouter;
exports["default"] = _default;