'use strict';

const _ = require('lodash');
const httpStatus = require('http-status-codes');
const { Order } = require('../../models/v1/order');

module.exports.save = (req, res, next) => {
  const objReturn = {};
  const body = _.pick(req.body, ['_user', '_establishment', 'status', 'order']);
  body.order_number = Math.floor(Math.random() * 10000000000 + 1);

  const order = new Order(body);

  order.save().then((document) => {
    objReturn.success = true;
    objReturn.response = document;
    return res.status(httpStatus.OK).json(objReturn);
  }).catch((err) => {
    objReturn.message = err.message;
    objReturn.error = err;
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(objReturn);
  });
};

module.exports.list = (req, res, next) => {
  const objReturn = {};

  Order.find().then((documents) => {
    objReturn.success = true;
    objReturn.response = documents;
    return res.status(httpStatus.OK).json(objReturn);
  }).catch((err) => {
    objReturn.message = err.message;
    objReturn.error = err;
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(objReturn);
  });
};

module.exports.update = (req, res, next) => {

};
