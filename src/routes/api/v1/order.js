'use strict';

const express = require('express');
const controller = require('../../../controllers/v1/order');

const order = express.Router();

order.post('/', controller.save);
order.get('/', controller.list);
order.patch('/:id', controller.update);

module.exports = order;
