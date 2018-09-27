'use-strict';

const fs = require('fs');
const path = require('path');

function readRecursiveDirectory(dir, filelist = ['']) {
  try {
    const pathDir = path.join(process.cwd(), 'src', dir);
    const files = fs.readdirSync(pathDir);
    filelist = filelist.length ? filelist : [''];
    files.forEach((file) => {
      if (fs.statSync(path.join(pathDir, file)).isDirectory()) {
        filelist = readRecursiveDirectory(path.join(dir, file), filelist);
      } else {
        filelist.push(path.join(dir, file));
      }
    });
  } catch (e) {
    throw e;
  }
  return filelist;
}

module.exports.readRecursiveDirectory = readRecursiveDirectory;
