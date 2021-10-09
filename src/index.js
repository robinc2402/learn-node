const fs = require("fs");
// fs.appendFile("notes.txt", "\nThis text file was created by NodeJS;", () => {
//   console.log("11231w23");
// });

// Read contents of file
// const buffer = new Buffer.from(fs.readFileSync("notes.txt", "utf8"));
// console.log(buffer.toString());
fs.close("./notes.txt");
