'use strict';

const app = require('express')();
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport');
const bodyParser = require('body-parser');
const commandFactory = require('express-hystrix');
const routes = require('./routes');
const httpStatus = require('http-status-codes');
const compression = require('compression');

/**
 * Middlewares
 */

app.use(cors());
app.use(helmet());
app.use(commandFactory());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

require('./passport')(passport);

app.use(routes);

app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).send({ error: true, message: 'NOT FOUND' });
});

module.exports = app;
