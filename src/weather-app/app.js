const request = require("postman-request");
const weather_report = require("./geocode.js");
const chalk = require("chalk");

weather_report("Gurugram", (err, res) => {
  if (err !== undefined) {
    chalk.red.inverse(err);
  } else {
    console.log(
      chalk.green.inverse(
        "== Weather report for " + res.body.location.name + " =="
      )
    );

    console.log(
      res.body.current.weather_descriptions[0] +
        ". It is currently " +
        res.body.current.temperature +
        " degrees. It feels like " +
        res.body.current.feelslike +
        " degrees out. There is a " +
        res.body.current.precip +
        "% chance of rain."
    );
  }
});
