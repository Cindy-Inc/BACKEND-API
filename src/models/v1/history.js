'use strict';

const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date
  },
  updatedAt: {
    type: Date
  },
  workspace_id: {
    index: true,
    type: String,
    required: true
  },
  conversation_id: {
    index: true,
    type: String,
    required: true
  },
  input: {
    type: String
  },
  output: {
    type: Object
  },
  intents: {
    type: Object
  },
  context:{
    type: Object
  },
  feedback: {
    type: Boolean,
    default: false
  },
  typeAgent: {
    index: true,
    type: Number,
    required: true
  },
  anything_else: {
    type: Boolean,
    default: false
  },
  username: {
    index: true,
    type: String
  },
  reviewed: {
    type: Boolean,
    required: true,
    default: false
  }
}, { collection: 'history' });

module.exports.History = mongoose.model('history', HistorySchema);
