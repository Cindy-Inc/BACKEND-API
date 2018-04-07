'use strict';

const mongoose = require('mongoose');
const validator = require('validator');

const EstabelecimentoSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 8
    }
});


const Estabelecimento = mongoose.model('Estabelecimento', EstabelecimentoSchema);

module.exports = { Estabelecimento };
