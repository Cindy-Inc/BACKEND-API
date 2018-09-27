'use strict';

const { User } = require('../../models/v1/user');
const httpStatus = require('http-status-codes');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

module.exports.authenticate = (req, res, next) => {
  const objReturn = {};
  const username = req.body.username;
  const password = req.body.password;

  User.findByCredentials(username, password).then((user) => {
    const token = jwt.sign(_.pick(user, ['_id', 'email', 'username', 'name', 'level', 'active']), process.env.SECRET, {
      expiresIn: 28800
    });

    objReturn.success = true;
    objReturn.response = {
      token: `${token}`,
      user: {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email
      }
    };
    res.status(httpStatus.OK).json(objReturn);
  }).catch((err) => {
    objReturn.error = true;
    objReturn.message = err.message;
    return res.status(httpStatus.UNAUTHORIZED).json(objReturn);
  });
};
