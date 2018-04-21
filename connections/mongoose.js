'use-strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI).then(() => {
    module.exports = mongoose;
}).catch((e) => {
    throw new Error('Unable to connect with MongoDb.');
});

