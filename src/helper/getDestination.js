/* eslint-disable no-console */
'use strict';

const path = require('path');
const fs = require('fs');

function getDestination(rawDestination, source) {
  const sourceBaseName = path.basename(source);
  const isDirectoryIndicated = rawDestination.endsWith(path.sep);

  try {
    const stats = fs.statSync(rawDestination);

    if (stats.isDirectory()) {
      return path.join(rawDestination, sourceBaseName);
    }

    return rawDestination;
  } catch (error) {
    if (error.code === 'ENOENT') {
      if (isDirectoryIndicated) {
        throw new Error(`Destination ${rawDestination} must be a directory`);
      }

      return rawDestination;
    }

    throw error;
  }
}

module.exports = { getDestination };
