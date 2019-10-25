const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, './');

const profileJSON = fs.readFileSync(`${baseDir}/playground.json`, { encoding: 'utf-8' });

const profileObj = JSON.parse(profileJSON);

const newObj = { ...profileObj, name: 'Ryan', age: '39' };

fs.writeFileSync(`${baseDir}/playground.json`, JSON.stringify(newObj));