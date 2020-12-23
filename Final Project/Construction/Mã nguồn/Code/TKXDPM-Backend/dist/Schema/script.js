"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

var _database = _interopRequireDefault(require("../config/database.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createFakeDb = function createFakeDb() {
  var createDb = new Promise(function (resolve, reject) {
    try {
      _database["default"].query("CREATE DATABASE IF NOT EXISTS ecobike", function (err, result) {
        if (err) throw err;
        console.log("Create database successfully!!");
      });
    } catch (err) {
      console.log(err);
    }
  });
  createDb.then();
};