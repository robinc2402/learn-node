const fs = require("fs");

// callback for Add CLI param
const addNote = function (title, body) {
  // load existing notes
  const notes = loadNotes();

  // append new log into existing.
  notes.push({
    title: title,
    body: body
  });

  // write note in file
  return saveNote(notes);
};

// read file data and return a JSON str
const getNotes = function () {
  const buffer = new Buffer.from(fs.readFileSync("./data.json", "utf8"));
  const notesText = buffer.toString();
  return notesText;
};

// write note in file
const saveNote = (obj) => {
  const dataStr = JSON.stringify(obj);

  console.log("Going to write inside the file.");

  fs.writeFileSync("./data.json", dataStr);

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

module.exports = {
  addNote: addNote,
  getNotes: getNotes
};
