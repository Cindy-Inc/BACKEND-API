'use strict';

const _ = require('lodash');
const httpStatus = require('http-status-codes');
const { message } = require('../../services/watsonAssistant');
// const { History } = require('../../models/history');
const { tokenValidate } = require('../../utils/tokenUtility');

module.exports.message = (req, res, next) => {
  const objReturn = {};
  const body = _.pick(req.body, ['text']);
  const payload = { input: { text: body.text } };
  // let credentials = {};

  tokenValidate(req.headers).then((credentials) => {
    payload.workspace_id = document.workspace_id;
    // credentials = {
    //   username: document.username,
    //   password: document.password,
    //   url_api: document.url_api,
    //   version_date: document.version_date
    // };
    return message(credentials, payload);
  }).then((watsonAnswer) => {
    objReturn.success = true;
    objReturn.response = watsonAnswer.output;
    return res.status(httpStatus.OK).json(objReturn);
  }).catch((err) => {
    objReturn.message = 'access denied';
    objReturn.error = err;
    return res.status(httpStatus.FORBIDDEN).json(objReturn);
  });
};
