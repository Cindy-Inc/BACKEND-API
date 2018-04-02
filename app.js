'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

const { empresa }  = require('./routes/empresa/index');
const { mensagem }  = require('./routes/mensagem/index');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/empresa', empresa);
app.use('/api/mensagem', mensagem);

app.use(function(req, res, next) {
    res.status(404).send({errorMessage: true, message: 'Not Found'});
});  

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

