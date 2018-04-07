'use strict';

require('./config/config');

const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const logger = require('./logger/index');
const { estabelecimento } = require('./routes/estabelecimento/index');
const { mensagem } = require('./routes/mensagem/index');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/estabelecimento', estabelecimento);
app.use('/api/mensagem', mensagem);

app.use((req, res, next) => {
    res.status(404).send({ errorMessage: true, message: 'Not Found' });
});

app.listen(process.env.PORT, () => {
    logger.info(`Server is running on port: ${process.env.PORT}`);
});

