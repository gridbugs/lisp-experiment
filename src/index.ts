#!/usr/bin/env -S npx ts-node

const util = require('./util');

process.stdout.write(`STDIN: ${util.readStdinSync()}`);
