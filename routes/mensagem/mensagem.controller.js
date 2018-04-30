'use strict';

const _ = require('lodash');
const { assistantMessage } = require('./../../services/watsonAssistant');

const receiveMessage = (req, res) => {
    const body = _.pick(req.body, ['input', 'context']);

    assistantMessage(body).then((message) => {
        res.json(message);
    }).catch((e) => {
        res.status(400).send(e);
    });
};

module.exports = { receiveMessage };
