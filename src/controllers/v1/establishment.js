'use strict';

const _ = require('lodash');
const httpStatus = require('http-status-codes');
const { Establishment } = require('../../models/v1/establishment');

module.exports.save = (req, res, next) => {
  const objReturn = {};
  const body = _.pick(req.body, ['_user', 'name', 'type', 'address', 'number', 'complement',
    'zip', 'state', 'city', 'phone', 'cnpj']);

  const establishment = new Establishment(body);

  establishment.save().then((document) => {
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
