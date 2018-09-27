'use-strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
}).then(() => {
}).catch((err) => {
  throw Error(err);
});

module.exports = mongoose;
