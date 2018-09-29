'use strict';

const _ = require('lodash');
const httpStatus = require('http-status-codes');
const assistant = require('../../services/watsonAssistant');

module.exports.message = (req, res, next) => {
  const objReturn = {};
  const body = _.pick(req.body, ['text', 'context']);
  const credentials = {};


  assistant.message(credentials, {
    workspace_id: '',
    input: {
      text: body.text
    },
    context: body.context ? body.context : {}
  }).then((answer) => {
    objReturn.success = true;
    objReturn.response = watsonAnswer.output;
    return res.status(httpStatus.OK).json(objReturn);
  }).catch((err) => {
    objReturn.error = err;
    return res.status(httpStatus.BAD_REQUEST).json(objReturn);
  });
};
