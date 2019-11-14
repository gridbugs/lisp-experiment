const fs = require('fs');

function readStdinSync(): string {
  return fs.readFileSync(0);
}

module.exports = {
  readStdinSync,
};
