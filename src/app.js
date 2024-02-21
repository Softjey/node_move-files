/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const { getDestination } = require('./helper/getDestination');
const args = process.argv.slice(2);

if (args.length !== 2) {
  /* eslint-disable max-len */
  console.error('Wrong number of arguments. Usage: node src/app.js <source> <destination>');
} else {
  const [source, rawDestination] = args;

  try {
    const destination = getDestination(rawDestination, source);

    fs.renameSync(source, destination);
  } catch (error) {
    console.error(error.message + ' rename error');
  }
}
