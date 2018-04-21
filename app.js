'use strict';

require('./config/config');
require('./connections/mongoose');

const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const timeout = require('connect-timeout');

const { estabelecimento } = require('./routes/estabelecimento/index');
const { mensagem } = require('./routes/mensagem/index');
const { commonUser } = require('./routes/commonUser/index');
const { companyUser } = require('./routes/companyUser/index');

app.use(cors());
app.use(timeout('10s'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/estabelecimento', estabelecimento);
app.use('/api/mensagem', mensagem);
app.use('/api/commonUser', commonUser);
app.use('/api/companyUser', companyUser);

app.use((req, res, next) => {
    res.status(404).send({ errorMessage: true, message: 'Not Found' });
});

app.use((err, req, res, next) => {
    if (req.timedout === true) {
        res.send(500, { error: 'Internal Server Error! Try again Later' });
    } else {
        next();
    }
});

app.listen(process.env.PORT, () => {
    console.info(`Server is running on port: ${process.env.PORT}`);
});

