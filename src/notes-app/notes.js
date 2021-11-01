const fs = require("fs");
const chalk = require("chalk");
const Table = require("cli-table");

// read file data and return a JSON str
const getNotes = function () {
  const buffer = new Buffer.from(fs.readFileSync("./data.json", "utf8"));
  const notesText = buffer.toString();
  return notesText;
};

// write note in file
const saveNote = (obj) => {
  const dataStr = JSON.stringify(obj);

  fs.writeFileSync("./data.json", dataStr);

  console.log(chalk.green.inverse("Note saved."));
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
const addNote = function (title, body) {
  // load existing notes
  const notes = loadNotes();

  // check if any note with same title exists?
  // if yes then collect that note in duplicateNotes array.
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

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

// callback for List notes
const listNotes = function () {
  const notes = loadNotes();
  displayTable(notes);
  Object.entries(notes).forEach(([k, v]) => {
    console.log(v.title);
  });

  // for(const [key, value])
};

// print table on terminal
const displayTable = function (data) {
  const tbl = new Table({
    head: ["TH 1 Title", "TH 2 Body"],
    colWidths: [200, 400]
  });

  tbl.push(["First value", "Second value"], ["First value", "Second value"]);
  console.log(tbl.toString());
};

module.exports = {
  addNote: addNote,
  getNotes: getNotes,
  listNotes: listNotes
};
