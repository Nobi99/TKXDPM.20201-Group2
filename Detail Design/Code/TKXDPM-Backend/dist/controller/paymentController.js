"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTransaction = exports.addTransaction = void 0;

require("regenerator-runtime/runtime");

var _bluebird = require("bluebird");

var _model = require("../model/model");

var addTransaction = /*#__PURE__*/function () {
  var _ref = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var transaction, kq;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            transaction = req.body.body;
            _context.next = 4;
            return _model.TransactionModel.addTransaction(transaction);

          case 4:
            kq = _context.sent;
            res.send({
              data: kq,
              status: 200
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function addTransaction(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.addTransaction = addTransaction;

var updateTransaction = /*#__PURE__*/function () {
  var _ref2 = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var kq;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(req.body.transactionInfor); // const updateBike = await BikeModel.updateBike();

            res.send({
              data: kq,
              status: 200
            });
            _context2.next = 4;
            return _model.TransactionModel.updateTransaction(req.body.transactionInfor);

          case 4:
            kq = _context2.sent;
            console.log(kq);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function updateTransaction(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateTransaction = updateTransaction;