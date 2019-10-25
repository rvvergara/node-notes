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

const getNOtes = () => 'Your notes';

const addNote = (title, body) => {
  const notes = loadNotes();
  if (notes.some((note) => note.title === title)) {
    console.log(chalk.white.bgRed.bold(`Cannot Add Note: There is already a note with the title ${title}!!`));
    return;
  }
  notes.push({ title, body });
  saveNotes(notes);
  console.log(chalk.white.bgBlue(`${chalk.bold('Success!!')}: Note with title ${chalk.bold(title)} saved!`));
};


module.exports = {
  getNOtes,
  addNote,
};