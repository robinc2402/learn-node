const chalk = require("chalk");

console.log(chalk.green("Hello world"));
console.log(chalk.red("Hello world"));
console.log(chalk.yellow("Hello world"));

const error = chalk.bold.red;
const warning = chalk.keyword("orange");

console.log(error("Error!"));
console.log(warning("Warning!"));
