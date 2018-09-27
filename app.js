'use strict';

require('./src/config/environment');
require('./src/config/connections');
require('./src/config/bootstrap');
console.log(`\x1b[34mdebug:\x1b[0m Port : ${process.env.PORT}\n`);
const app = require('./src/config/express');

const server = app.listen(process.env.PORT, '127.0.0.1', () => {
  console.log(`\x1b[34mdebug:\x1b[0m Server is running on: \x1b[4mhttp://${server.address().address}:${process.env.PORT}\x1b[0m`);
});
