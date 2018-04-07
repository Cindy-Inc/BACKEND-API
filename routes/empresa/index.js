'use strict';

const express = require('express');
const controller = require('./empresa.controller');

const empresa = express.Router();

empresa.post('/', controller.saveEmpresa);

module.exports = { empresa };
