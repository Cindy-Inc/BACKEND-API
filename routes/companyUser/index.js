'use strict';

const express = require('express');
const controller = require('./companyUser.controller');

const companyUser = express.Router();

companyUser.post('/', controller.saveUser);

module.exports = { companyUser };
