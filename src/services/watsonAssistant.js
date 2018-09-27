'use-strict';

const AssistantV1 = require('watson-developer-cloud/assistant/v1');

module.exports.message = (credentials, payload) => {
  const assistant = new AssistantV1({
    username: credentials.username,
    password: credentials.password,
    url: credentials.url_api || 'https://gateway.watsonplatform.net/assistant/api',
    version: credentials.version_date || '2018-09-20'
  });

  payload.alternate_intents = true;
  payload.input.text = payload.input.text.replace(/\r|\n|\r|\t|\s+/g, '').trim();
  return new Promise((resolve, reject) => {
    assistant.message(payload, (err, res) => {
      if (err) reject({ err, message: 'assistant.message error' });
      resolve(res);
    });
  });
};

module.exports.getWorkspace = (credentials, payload) => {
  const assistant = new AssistantV1({
    username: credentials.username,
    password: credentials.password,
    url: credentials.url_api || 'https://gateway.watsonplatform.net/assistant/api',
    version: credentials.version_date || '2018-09-20'
  });

  return new Promise((resolve, reject) => {
    assistant.getWorkspace(payload, (err, res) => {
      if (err) reject({ err, message: 'assistant.getWorkspace error' });
      resolve(res);
    });
  });
};

module.exports.updateWorkspace = (credentials, payload) => {
  const assistant = new AssistantV1({
    username: credentials.username,
    password: credentials.password,
    url: credentials.url_api || 'https://gateway.watsonplatform.net/assistant/api',
    version: credentials.version_date || '2018-09-20'
  });

  return new Promise((resolve, reject) => {
    assistant.updateWorkspace(payload, (err, res) => {
      if (err) reject({ err, message: 'assistant.updateWorkspace error' });
      resolve(res);
    });
  });
};

module.exports.listDialogNodes = (credentials, payload) => {
  const assistant = new AssistantV1({
    username: credentials.username,
    password: credentials.password,
    url: credentials.url_api || 'https://gateway.watsonplatform.net/assistant/api',
    version: credentials.version_date || '2018-09-20'
  });

  return new Promise((resolve, reject) => {
    assistant.listDialogNodes(payload, (err, res) => {
      if (err) reject({ err, message: 'assistant.listDialogNodes error' });
      resolve(res);
    });
  });
};

module.exports.listIntents = (credentials, payload) => {
  const assistant = new AssistantV1({
    username: credentials.username,
    password: credentials.password,
    url: credentials.url_api || 'https://gateway.watsonplatform.net/assistant/api',
    version: credentials.version_date || '2018-09-20'
  });

  return new Promise((resolve, reject) => {
    assistant.listIntents(payload, (err, res) => {
      if (err) reject({ err, message: 'assistant.listIntents error' });
      resolve(res);
    });
  });
};

module.exports.listExamples = (req, res, next) => {

};

module.exports.createIntent = (req, res, next) => {

};

module.exports.createExample = (req, res, next) => {

};

module.exports.updateExample = (req, res, next) => {

};

module.exports.deleteIntent = (req, res, next) => {

};

module.exports.deleteExample = (req, res, next) => {

};

module.exports.listEntities = (req, res, next) => {

};

module.exports.listValues = (req, res, next) => {

};

module.exports.listSynonyms = (req, res, next) => {

};

module.exports.createSynonym = (req, res, next) => {

};

module.exports.deleteSynonym = (req, res, next) => {

};

module.exports.deleteEntity = (req, res, next) => {

};

module.exports.deleteValue = (req, res, next) => {

};
