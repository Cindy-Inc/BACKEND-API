'use strict';

const express = require('express');
const controller = require('./estabelecimento.controller');

const estabelecimento = express.Router();

estabelecimento.post('/', controller.saveEstabelecimento);

module.exports = { estabelecimento };
