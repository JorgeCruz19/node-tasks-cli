const fs = require('fs')

const saveInformation = (data) => {
  const file = './db/data.json';

  fs.writeFileSync(file, JSON.stringify(data));
}

module.exports = {saveInformation}