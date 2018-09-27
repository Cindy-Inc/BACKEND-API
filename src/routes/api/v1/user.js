'use strict';

const express = require('express');
const controller = require('../../../controllers/v1/user');

const user = express.Router();

user.post('/', controller.save);
user.get('/', controller.list);
user.get('/:id', controller.get);
user.delete('/:id', controller.delete);
user.patch('/:id', controller.update);

module.exports = user;
