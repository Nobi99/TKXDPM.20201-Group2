"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var connection = _mysql["default"].createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE // host: 'localhost',
  // user: 'root',
  // password: '',
  // database: 'ecobike'

});

var _default = connection;
exports["default"] = _default;