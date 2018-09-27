'use strict';

const express = require('express');
const controller = require('../../../controllers/v1/history');

const history = express.Router();

history.get('/', controller.list);
history.post('/', controller.save);
history.get('/:conversation_id/:workspace_id?', controller.find);

module.exports = history;
