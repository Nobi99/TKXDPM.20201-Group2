"use strict";

var _database = _interopRequireDefault(require("./config/database.config"));

var _web = _interopRequireDefault(require("./route/web"));

var _mysql = _interopRequireDefault(require("mysql"));

var _Schema = require("./Schema");

var _bike = _interopRequireDefault(require("./model/bike.model"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var bodyParser = require('body-parser');

require('dotenv').config();

var app = express();
app.use((0, _cors["default"])());
app.get('/', function (req, res) {
  res.send("Hello");
});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
(0, _web["default"])(app);
app.listen(process.env.PORT, function () {
  console.log("Chiến is running app");
});