const yargs = require('yargs');
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note content body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

// create a remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: (argv) => notes.removeNote(argv.title),
});

// create a read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: (argv) => notes.readNote(argv.title),
});

// create a list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: () => notes.listNotes(),
});

// Notes crud - add, remove, read, list
yargs.parse();