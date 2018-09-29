'use strict';

const _ = require('lodash');
const httpStatus = require('http-status-codes');

module.exports.save = (req, res, next) => {
  const objReturn = {};
  const body = _.pick(req.body, ['name', 'email', 'level', 'active', 'password', 'username']);

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

module.exports.update = (req, res, next) => {

};
