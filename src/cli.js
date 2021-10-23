// receiving command line params
//console.log(process.argv[2]);
const yargs = require("yargs");
// customising yargs version
yargs.version("0.1.0");
const inputs = yargs.argv;

if ("something" === inputs.title) {
  console.log("Recieved something.");
}

console.log(inputs);
