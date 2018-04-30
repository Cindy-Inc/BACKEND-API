'use strict';

const express = require('express');
const controller = require('./mensagem.controller');

const mensagem = express.Router();

mensagem.post('/', controller.receiveMessage);

module.exports = { mensagem };
