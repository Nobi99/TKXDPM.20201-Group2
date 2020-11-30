"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _database = _interopRequireDefault(require("../config/database.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addTransaction = function addTransaction(transaction) {
  var query = "INSERT INTO transaction (username, bike_id, create_at, user_id) VALUES(" + transaction.username + ", " + transaction.bikeId + ", " + transaction.createAt + ", " + transaction.userId + ")";
  return new Promise(function (resolve, reject) {
    _database["default"].query(query, function (err, result, kq) {
      if (err) throw err;else resolve(result);
    });
  });
};

var updateTransaction = function updateTransaction(data) {
  var query = "UPDATE transaction SET fee = " + data.fee + ", end_at = " + data.end + " WHERE id = " + data.id;
  return new Promise(function (resolve, reject) {
    _database["default"].query(query, function (err, result, kq) {
      if (err) throw err;else resolve(result);
    });
  });
};

var TransactionModel = {
  addTransaction: addTransaction,
  updateTransaction: updateTransaction
};
var _default = TransactionModel;
exports["default"] = _default;