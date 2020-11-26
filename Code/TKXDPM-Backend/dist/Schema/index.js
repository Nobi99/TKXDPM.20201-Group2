"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createStationTableSQL", {
  enumerable: true,
  get: function get() {
    return _station["default"];
  }
});
Object.defineProperty(exports, "createBikeTableSQL", {
  enumerable: true,
  get: function get() {
    return _bike["default"];
  }
});
Object.defineProperty(exports, "fakeBike", {
  enumerable: true,
  get: function get() {
    return _fake["default"];
  }
});

var _station = _interopRequireDefault(require("./station.schema"));

var _bike = _interopRequireDefault(require("./bike.schema"));

var _fake = _interopRequireDefault(require("./fake"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }