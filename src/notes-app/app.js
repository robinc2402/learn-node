const yargs = require("yargs");
const notesText = require("./notes.js");

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
  handler: function (title, body) {
    console.log(
      "Going to add a note. Title --> " + title + " and Body -->" + body
    );
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
  handler: function (title) {
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

// console.log(notesText);
// console.log(121212);

// const mail = require("@one.com/smtp-client");
// console.log(mail);

// const sum = require("./utils.js");
// console.log(sum(10, -2));
