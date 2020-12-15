"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTransaction = exports.addTransaction = void 0;

require("regenerator-runtime/runtime");

var _bluebird = require("bluebird");

var _model = require("../model/model");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * adding Transaction to db
 */
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
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * update the transaction
 */


exports.addTransaction = addTransaction;

var updateTransaction = /*#__PURE__*/function () {
  var _ref2 = (0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var updateBike;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log(req.body.transactionInfor);
            updateBike = {
              bikeId: req.body.transactionInfor.bikeId,
              stationId: req.body.transactionInfor.stationId
            };

            try {
              _model.BikeModel.returnBike(updateBike).then( /*#__PURE__*/(0, _bluebird.coroutine)( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var kq;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _model.TransactionModel.updateTransaction(req.body.transactionInfor);

                      case 2:
                        kq = _context2.sent;
                        res.send({
                          data: kq,
                          status: 200
                        });

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              })));
            } catch (err) {
              res.send({
                msg: "Fail to finish!! Try again"
              });
            }

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateTransaction(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateTransaction = updateTransaction;