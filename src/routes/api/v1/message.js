'use strict';

const express = require('express');
const controller = require('../../../controllers/v1/message');

const message = express.Router();

message.post('/', controller.message);

module.exports = message;
