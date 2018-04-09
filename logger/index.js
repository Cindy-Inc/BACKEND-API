'use strict';

const info = message => console.info(`\x1b[1m[INFO]\x1b[0m ${message}`);
const error = message => console.error(`\x1b[31m\x1b[1m[ERROR]\x1b[0m ${message}`);
const warn = message => console.warn(`\x1b[33m\x1b[1m[WARN]\x1b[0m ${message}`);
const debug = message => console.debug(`\x1b[1m[DEBUG]\x1b[0m ${message}`);

module.exports = {
    info,
    error,
    warn,
    debug
};
