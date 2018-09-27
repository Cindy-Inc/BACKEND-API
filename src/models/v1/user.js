'use strict';

const validator = require('validator');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

const UserSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date
  },
  updatedAt: {
    type: Date
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 1,
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  level: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
  password: {
    type: String,
    required: true,
    minlength: 4
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 1,
    lowercase: true
  }
}, { collection: 'user' });

UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email', 'username', 'name', 'level', 'active']);
};

UserSchema.statics.findByCredentials = function (username, password) {
  const User = this;

  return User.findOne({ username }).then((user) => {
    if (!user) {
      return Promise.reject({ message: 'user not found' });
    }

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (!isMatch || err) {
          reject({ message: 'wrong password' });
        }
        resolve(user);
      });
    });
  });
};

UserSchema.pre('save', function (next) {
  const user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (error, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

module.exports.User = mongoose.model('user', UserSchema);
