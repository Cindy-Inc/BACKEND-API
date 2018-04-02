'use strict';

const  receiveMessage = (req, res) => {
    res.send({errorMessage: false, message: 'Mensagem work\'s'});
};
    
module.exports = { receiveMessage };
