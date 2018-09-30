'use strict';

const _ = require('lodash');
const httpStatus = require('http-status-codes');
const assistant = require('../../services/watsonAssistant');
const jwtDecode = require('jwt-decode');
const { Order } = require('./../../models/v1/order');


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
      watsonAnswer.output.generic.push({ response_type: 'text', text: '<br>Subway<br>BugerKing<br>Achapa' });
    } else if (watsonAnswer.output.buscarLojas) {
      watsonAnswer.output.generic.push({ response_type: 'text', text: '<br>Habbibs<br>McDonalds<br>Hamburguinho<br>Pizzaria Poke' });
    }
    action(watsonAnswer).then((answer) => {
      objReturn.success = true;
      objReturn.response = answer;
      return res.status(httpStatus.OK).json(objReturn);
    });
  }).catch((err) => {
    objReturn.error = err;
    return res.status(httpStatus.BAD_REQUEST).json(objReturn);
  });
};

function action(watsonAnswer) {
  return new Promise((resolve, reject) => {
    if (watsonAnswer.output.realizarPedido) {
      const order = new Order({
        _user: watsonAnswer.context._id,
        order_number: Math.floor(Math.random() * 10000000000 + 1),
        status: 'Encaminhado',
        order: watsonAnswer.context.pedidos
      });
      order.save().then((order) => {
        console.log(order);
        watsonAnswer.output.generic[0].text = watsonAnswer.output.generic[0].text.replace('&&&', order.order_number);
        resolve(watsonAnswer);
      });
    } else {
      resolve(watsonAnswer);
    }
  });
}
