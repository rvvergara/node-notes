const chalk = require('chalk');
const notes = require('./notes');

const command = process.argv[2];

console.log(process.argv);

if (command === 'add') {
  console.log(chalk.white.bgBlue.bold.inverse('Adding Note'));
} else if (command === 'remove') {
  console.log(chalk.white.bgRed.bold('Removing Note'));
}