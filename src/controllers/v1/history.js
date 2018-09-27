'use strict';

const _ = require('lodash');
const httpStatus = require('http-status-codes');
const { History } = require('../../models/v1/history');

module.exports.list = (req, res, next) => {
  const objReturn = {};
  const query = {};

  if (req.query.workspace_id) { query.workspace_id = workspace_id; }

  History.find(query).then((documents) => {
    let arrayReturn = [];
    let groupBy = _.groupBy(documents, 'conversation_id');
    Object.keys(groupBy).forEach((key) => {
      if (filterHistory(groupBy[key])) {
        arrayReturn.push({
          workspace_id: groupBy[key][0].workspace_id,
          conversation_id: key,
          username: groupBy[key][0].username,
          reviewed: groupBy[key][0].reviewed,
          createdAt: groupBy[key][0].createdAt
        });
      }
    });
    objReturn.response = arrayReturn;
    objReturn.success = true;
    return res.status(httpStatus.OK).json(objReturn);
  }).catch((err) => {
    objReturn.message = err.message;
    objReturn.error = err;
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(objReturn);
  });
};

module.exports.find = (req, res, next) => {
  const objReturn = {};
  const workspace_id = req.params.workspace_id;
  const conversation_id = req.params.conversation_id;
  const query = { conversation_id };

  if (workspace_id) { query.workspace_id = workspace_id; }

  History.find(query).then((documents) => {
    if (!documents) {
      objReturn.error = true;
      objReturn.message = '`id` not found';
      return res.status(httpStatus.NOT_FOUND).json(objReturn);
    }
    objReturn.response = documents;
    objReturn.success = true;
    return res.status(httpStatus.OK).json(objReturn);
  }).catch((err) => {
    objReturn.message = err.message;
    objReturn.error = err;
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(objReturn);
  });
};

module.exports.save = (req, res, next) => {
  const objReturn = {};
  const body = _.pick(req.body, ['conversation_id', 'workspace_id', 'username', 'input', 'intents', 'output', 'confidence', 'feedback', 'typeAgent', 'anything_else']);

  const history = new History(body);

  history.save().then((document) => {
    objReturn.response = document;
    objReturn.success = true;
    return res.status(httpStatus.OK).json(objReturn);
  }).catch((err) => {
    objReturn.message = err.message;
    objReturn.error = err;
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(objReturn);
  });
};

function filterHistory(arr) {
  if (arr.length > 1) {
    return true;
  } else if (arr[0].typeAgent === 2) {
    return true;
  } else {
    return false;
  }
};
