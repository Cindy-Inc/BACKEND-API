'use strict';

const express = require('express');
const controller = require('../../../controllers/v1/establishment');

const establishment = express.Router();

establishment.post('/', controller.save);

module.exports = establishment;
