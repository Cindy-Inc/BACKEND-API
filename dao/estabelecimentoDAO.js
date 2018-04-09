'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.SchemaTypes;

const EstabelecimentoSchema = new mongoose.Schema({
    _user: {
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
    complement: {
        type: String,
        required: false
    },
    zip: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 8
    },
    cnpj: {
        type: String,
        required: true
    }
});


const Estabelecimento = mongoose.model('Estabelecimento', EstabelecimentoSchema);

module.exports = { Estabelecimento };
