const yargs = require("yargs");
const notes = require("./notes.js");
// const utils = require("./utils.js");

// add command
yargs.command({
  command: "add",
  describe: "Adds new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv["title"], argv["body"]);
  }
});

// remove command
yargs.command({
  command: "remove",
  describe: "Removes a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv["title"]);
  }
});

// read command
yargs.command({
  command: "read",
  describe: "Reads a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNote(argv["title"]);
  }
});

// list notes command
yargs.command({
  command: "list",
  describe: "Lists all notes",
  handler() {
    notes.listNotes();
  }
});

yargs.parse();

// console.log(notesText);
// console.log(121212);

// const mail = require("@one.com/smtp-client");
// console.log(mail);

// const sum = require("./utils.js");
// console.log(sum(10, -2));
