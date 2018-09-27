'use-strict';

const path = require('path');
let env = process.env.NODE_ENV;
let pwd = process.cwd() + '/src/config/env/';

switch (env) {
  case 'production':
    pwd = pwd + 'production.env';
    break;
  case 'statement':
    pwd = pwd + 'statement.env';
    break;
  case 'development':
    fpwd = pwd + 'development.env';
    break;
  default:
    pwd = pwd + 'local.env';
    env = 'local';
    break;
}

console.log(`\x1b[34mdebug:\x1b[0m ${Date()}\n\n\x1b[34mdebug:\x1b[0m Environment : ${env}`);

require('dotenv')
  .config({
    path: path.resolve(pwd)
  });
