'use strict';

const _ = require('lodash');
const httpStatus = require('http-status-codes');
const assistant = require('../../services/watsonAssistant');
var jwtDecode = require('jwt-decode');

module.exports.message = (req, res, next) => {
  const objReturn = {};
  const body = _.pick(req.body, ['text', 'context']);
  const credentials = {
    username: process.env.ASSISTANT_USER,
    password: process.env.ASSISTANT_PWD
  };
  const user = jwtDecode(req.headers.authorization);
  if (body.context) {
    Object.keys(user).forEach((key) => {
        body.context[key] = user[key];
    });
  }
  assistant.message(credentials, {
    workspace_id: process.env.ASSISTANT_WKS,
    input: {
      text: body.text
    },
    context: body.context ? body.context : {}
  }).then((watsonAnswer) => {

    if (user.email === 'admin@cindy.co' && watsonAnswer.output.buscarLojas) {
      watsonAnswer.output.text = watsonAnswer.output.text + `<br>Subway<br>BugerKing<br>Achapa`;
    } else if ( watsonAnswer.output.buscarLojas) {
      watsonAnswer.output.text = watsonAnswer.output.text + `<br>Habbibs<br>McDonalds<br>Hamburguinho<br>Mr. Poke`;
    }

    objReturn.success = true;
    objReturn.response = watsonAnswer;
    return res.status(httpStatus.OK).json(objReturn);
  }).catch((err) => {
    objReturn.error = err;
    return res.status(httpStatus.BAD_REQUEST).json(objReturn);
  });
};
