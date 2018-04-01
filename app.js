'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

