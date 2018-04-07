'use-strict';

const WatsonAssistant = require('watson-developer-cloud');

const watsonAssistant = WatsonAssistant.conversation({
    username: process.env.CONV_USER,
    password: process.env.CONV_PASS,
    version: 'v1',
    version_date: '2017-04-04'
});

const assistantMessage = (payload) => {
    payload.workspace_id = process.env.CONV_WORK;
    return new Promise((resolve, reject) => {
        watsonAssistant.message(payload, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
};

module.exports = { assistantMessage };
