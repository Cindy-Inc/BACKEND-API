'use strict';

const express = require('express');
const controller = require('./commonUser.controller');

const commonUser = express.Router();

commonUser.post('/', controller.saveUser);

module.exports = { commonUser };
