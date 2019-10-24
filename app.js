const chalk = require('chalk');
const notes = require('./notes');

console.log(notes.getNOtes());

console.log(chalk.green.bgBlack.bold.inverse('Success!'));