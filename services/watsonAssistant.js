'use-strict';

const AssistantV1 = require('watson-developer-cloud/assistant/v1');

const assistant = new AssistantV1({
  username: '<username>',
  password: '<password>',
  url: 'https://gateway.watsonplatform.net/assistant/api/',
  version: '2018-02-16'
});

const assistantMessage = (payload) => {
  payload.workspace_id = '<workspace_id>';
  return new Promise((resolve, reject) => {
    assistant.message(payload, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

module.exports = { assistantMessage };
