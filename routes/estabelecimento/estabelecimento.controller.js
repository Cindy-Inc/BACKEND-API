'use strict';

const _ = require('lodash');
const { ObjectID } = require('mongodb');
const { Estabelecimento } = require('./../../models/estabelecimento.model');

const saveEstabelecimento = (req, res) => {
    const body = _.pick(req.body, ['_user', 'name', 'type', 'address', 'number', 'complement',
        'zip', 'state', 'city', 'phone', 'cnpj']);

    if (!ObjectID.isValid(body._user)) {
        return res.status(400).send({ errorMessage: 'Valid _user id is required' });
    }

    const estabelecimento = new Estabelecimento(body);
    estabelecimento.save().then((estab) => {
        res.send(estab);
    }).catch((e) => {
        res.status(400).send(e);
    });
};

module.exports = { saveEstabelecimento };
