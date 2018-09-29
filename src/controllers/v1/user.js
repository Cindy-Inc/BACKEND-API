'use strict';

const _ = require('lodash');
const httpStatus = require('http-status-codes');
const { User } = require('../../models/v1/user');

module.exports.save = (req, res, next) => {
  const objReturn = {};
  const body = _.pick(req.body, ['email', 'username', 'name', 'level', 'active', 'type',
  'address', 'number', 'complement', 'zip', 'state', 'city', 'phone', 'password']);

  const user = new User(body);

  user.save().then((document) => {
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

  User.find().then((documents) => {
    objReturn.success = true;
    objReturn.response = documents;
    return res.status(httpStatus.OK).json(objReturn);
  }).catch((err) => {
    objReturn.message = err.message;
    objReturn.error = err;
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(objReturn);
  });
};

module.exports.get = (req, res, next) => {

};

module.exports.delete = (req, res, next) => {

};

module.exports.update = (req, res, next) => {

};
