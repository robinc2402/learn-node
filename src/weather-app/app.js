const request = require("postman-request");
const weather_report = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");
const chalk = require("chalk");

const location = process.argv[2];

weather_report(location, (err, res) => {
  if (!location) {
    return console.log(chalk.red.inverse("Please provide a location."));
  } else if (err) {
    return console.log(err);
  }
  forecast(res.body.location.lon, res.body.location.lat, (error, data) => {
    if (err) {
      return console.log(err);
    }

    console.log(res.body.location.name);
    console.log(data);
  });
});
