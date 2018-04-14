'use strict';

const _ = require('lodash');
const { ObjectID } = require('mongodb');
const { Estabelecimento } = require('./../../dao/estabelecimentoDAO');

const saveEstabelecimento = (req, res) => {
    let body = _.pick(req.body, ['_user', 'name', 'type', 'address', 'complement',
        'zip', 'state', 'city', 'phone', 'cnpj']);

    if (!ObjectID.isValid(body._user))
        return res.status(400).send({ errorMessage: 'Valid _user id is required' });

    let estabelecimento = new Estabelecimento(body);

    estabelecimento.save().then((user) => {
        res.send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });

};

module.exports = { saveEstabelecimento };
