const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const baseDir = path.resolve(__dirname, './.data');

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync(`${baseDir}/notes.json`, { encoding: 'utf-8' }));
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync(`${baseDir}/notes.json`, JSON.stringify(notes));
};

const findNote = (notes, title, method) => {
  const noteExists = notes.some((note) => note.title === title);
  if (!noteExists && method !== 'add') {
    console.log(chalk.white.bgRed.bold(`No note with title ${title} found!!`));
  }
  return noteExists;
};

const getNOtes = () => 'Your notes';

const addNote = (title, body) => {
  const notes = loadNotes();
  if (findNote(notes, title, 'add')) {
    console.log(chalk.white.bgRed.bold(`Cannot Add Note: There is already a note with the title ${title}!!`));
    return;
  }
  notes.push({ title, body });
  saveNotes(notes);
  console.log(chalk.white.bgBlue(`${chalk.bold('Success!!')}: Note with title ${chalk.bold(title)} saved!`));
};

const removeNote = (title) => {
  const notes = loadNotes();
  if (!findNote(notes, title)) return;

  const newNotes = notes.filter((note) => note.title !== title);

  saveNotes(newNotes);
  console.log(chalk.white.bgRedBright(`${chalk.bold('Deleted note')}: Note with title ${chalk.bold(title)} removed!`));
};

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length === 0) {
    console.log(chalk.yellow.bgRed.bold('No notes to show'));
    return;
  }

  console.log(chalk.cyanBright.bold(`\nListing ${notes.length} notes:\n`));

  notes.forEach((note) => {
    console.log(chalk.yellow('Title: '), chalk.white.bold(note.title));
    console.log(chalk.yellow('Body: '), chalk.white.bold(note.body));
    console.log('========================');
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  if (!findNote(notes, title)) return;
  const note = notes.find((note) => note.title === title);
  console.log('\n', chalk.yellow('Title: '), chalk.white.bold(note.title));
  console.log('\n', chalk.yellow('Body: '), chalk.white.bold(note.body));
};

module.exports = {
  getNOtes,
  addNote,
  removeNote,
  listNotes,
  readNote,
};