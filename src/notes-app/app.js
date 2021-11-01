const yargs = require("yargs");
const notes = require("./notes.js");
// const utils = require("./utils.js");

// add command
yargs.command({
  command: "add",
  desrcibe: "Adds new note",
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
  handler: function (argv) {
    notes.addNote(argv["title"], argv["body"]);
  }
});

// remove command
yargs.command({
  command: "remove",
  describe: "Deletes a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function (argv) {
    console.log("Going to delete --> " + title);
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
  handler: function (title) {
    console.log("Reading a note --> " + title);
  }
});

// list notes command
yargs.command({
  command: "list",
  describe: "Lists all notes",
  handler: function () {
    console.log("Listing all notes.");
  }
});

yargs.parse();

// console.log(notesText);
// console.log(121212);

// const mail = require("@one.com/smtp-client");
// console.log(mail);

// const sum = require("./utils.js");
// console.log(sum(10, -2));
