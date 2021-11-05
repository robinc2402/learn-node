// receiving command line params
//console.log(process.argv[2]);
const { string } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes-app/notes.js");
// customising yargs version
yargs.version("0.1.0");

// if ("something" === inputs.title) {
//   console.log("Recieved something.");
// }

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Body of the note",
      demandOption: true,
      type: "string"
    }
  },
  handler: function (argv) {
    console.log(
      "adding a new note with Title --> " +
        argv.title +
        " and Body --> " +
        argv.body
    );
  }
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  handler: function () {
    console.log("removing a new note");
  }
});

//create list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    console.log("Listing all notes");
    console.log(notes);
  }
});

yargs.parse();

//console.log(yargs.argv);
