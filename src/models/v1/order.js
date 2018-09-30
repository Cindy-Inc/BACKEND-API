'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.SchemaTypes;

const OrderSchema = new mongoose.Schema({
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
  _establishment: {
    index: true,
    type: Schema.ObjectId
  },
  order_number: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  order: {
    type: Object,
    required: true
  }

}, { collection: 'order' });

module.exports.Order = mongoose.model('order', OrderSchema);
