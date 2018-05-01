'use-strict';

const AssistantV1 = require('watson-developer-cloud/assistant/v1');

const assistant = new AssistantV1({
  username: process.env.ASST_USER,
  password: process.env.ASST_PASS,
  url: process.env.ASST_URL,
  version: '2018-02-16'
});

const assistantMessage = (payload) => {
  payload.workspace_id = process.env.ASST_WORKID;
  return new Promise((resolve, reject) => {
    assistant.message(payload, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

module.exports = { assistantMessage };
