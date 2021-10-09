const fs = require("fs");

const buffer = new Buffer.from(fs.readFileSync("./notes.txt", "utf8"));
const notesText = buffer.toString();
//console.log(buffer.toString());

module.exports = notesText;
