'use strict';

require('./config/config');
require('./connections/mongoose');

const app = require('./middlewares/express');

app.listen(process.env.PORT, () => {
  console.info(`Server is running on port: ${process.env.PORT}`);
});

