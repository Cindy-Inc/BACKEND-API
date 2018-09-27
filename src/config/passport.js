const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { User } = require('../models/v1/user');

module.exports = function (passport) {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromHeader('authorization');
  // ExtractJwt.fromUrlQueryParameter('authorization');
  opts.secretOrKey = process.env.SECRET;
  passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
    User.findById(jwtPayload._id).then((user) => {
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    }).catch((err) => {
      return done(err, false);
    });
  }));
};
