'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.SchemaTypes;

const EstablishmentSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date
  },
  updatedAt: {
    type: Date
  },
  _user: {
    index: true,
    type: Schema.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  complement: {
    type: String
  },
  zip: {
    index: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  latitude: {
    type: String
  },
  longitude: {
    type: String
  },
  city: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  cnpj: {
    type: String,
    required: true
  }
}, { collection: 'establishment' });

module.exports.Establishment = mongoose.model('establishment', EstablishmentSchema);
