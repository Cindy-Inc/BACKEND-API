'use strict';

const express = require('express');
const controller = require('../../../controllers/v1/authenticate');

const authenticate = express.Router();

authenticate.post('/', controller.authenticate);

module.exports = authenticate;
