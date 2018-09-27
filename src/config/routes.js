const express = require('express');
const passport = require('passport');
const helpers = require('../utils/helpers');

const routes = express.Router();

const fileRoutes = helpers.readRecursiveDirectory('routes')
  .filter((item) => {
    return item !== '';
  });
fileRoutes.forEach((file) => {
  const rf = require('../' + file.replace('.js', ''));
  const fn = file
    .replace('routes', '')
    .split('\\')
    .join('/')
    .replace('.js', '');
  if (!fn.includes('authenticate')) {
    routes.use(fn, passport.authenticate('jwt', { session: false }), rf);
  } else {
    routes.use(fn, rf);
  }
});

module.exports = routes;
