const fs = require("fs");
const chalk = require("chalk");
const Table = require("cli-table");

// read file data and return a JSON str
const getNotes = () => {
  const buffer = new Buffer.from(fs.readFileSync("./data.json", "utf8"));
  const notesText = buffer.toString();
  return notesText;
};

// write note in file
const saveNote = (obj) => {
  const dataStr = JSON.stringify(obj);

  fs.writeFileSync("./data.json", dataStr);

  console.log(chalk.green.inverse("Records updated."));
  listNotes();
  return true;
};

// load notes data
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("./data.json");
    const dataJSON = dataBuffer.toString();
    const dataObj = JSON.parse(dataJSON);
    return dataObj;
  } catch (e) {
    return [];
  }
};

// callback for Add CLI param
const addNote = (title, body) => {
  // load existing notes
  const notes = loadNotes();

  // check if any note with same title exists?
  // if yes then collect that note in duplicateNotes array.
  const duplicateNotes = notes.filter((note) => note.title === title);

  // if duplicateNotes is having an entry
  // that means this note is a duplicate and we shouldnt save it.
  if (duplicateNotes.length === 0) {
    // append new log into existing.
    notes.push({
      title: title,
      body: body
    });

    // write note in file
    return saveNote(notes);
  } else {
    console.log(
      chalk.red.inverse(
        "A note with this title already exists. Please try again with a different title."
      )
    );
  }
};

// remove a note
const removeNote = (title) => {
  const notes = loadNotes();

  // check if notes exists
  if (0 === notes.length) {
    console.log(chalk.red("Nothing to delete. All notes were deleted."));
    return false;
  }

  // find all the notes that are NOT having title matching with the given-title.
  const notesArr = notes.filter((v) => title !== v.title);

  // if we found matches, then
  if (notes.length > notesArr.length) {
    saveNote(notesArr);
  } else {
    console.log(chalk.red.inverse("No note found matching this title!"));
  }
};

// read a note
const readNote = (title) => {
  const notes = loadNotes();

  const notesArr = notes.filter((v) => v.title === title);

  if (notesArr.length) {
    const noteSingleArr = notesArr.map((v, i) => {
      return { [v.title]: v.body };
    });

    displayTable(noteSingleArr);
  } else {
    console.log(chalk.red.inverse("No note found matching this title."));
  }
};

// callback for List notes
const listNotes = () => {
  const notes = loadNotes();
  const notesArr = notes.map((v, i) => {
    return { [v.title]: v.body };
  });
  displayTable(notesArr);
};

// print table on terminal
const displayTable = (data) => {
  const table = new Table({
    head: ["Title", "Body"],
    colWidths: [25, 50]
  });

  table.push(...data);
  console.log(table.toString());
};

module.exports = {
  addNote: addNote,
  getNotes: getNotes,
  listNotes: listNotes,
  removeNote: removeNote,
  readNote: readNote
};
