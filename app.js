const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: () => console.log('Adding a new note'),
});

// create a remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => console.log('Removing a note!'),
});

// create a read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => console.log('Reading a note!'),
});

// create a list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: () => console.log('Listing all notes!'),
});

// Notes crud - add, remove, read, list
console.log(yargs.argv);