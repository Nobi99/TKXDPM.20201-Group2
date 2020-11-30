"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTransaction = exports.addTransaction = void 0;

var _model = require("../model/model");

var addTransaction = function addTransaction(req, res) {
  //     try {
  //         console.log(req.body);
  //         const kq = await TransactionModel.addTransaction();
  //         res.send({ data: kq, status: 200 });
  //     }
  //     catch (err) {
  //         console.log(err);
  //     }
  console.log(req.body);
  res.send(req.body);
};

exports.addTransaction = addTransaction;

var updateTransaction = function updateTransaction(req, res) {
  console.log(req.body);
};

exports.updateTransaction = updateTransaction;