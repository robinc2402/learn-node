const request = require("postman-request");
const get_coords = require("./geocode.js");
const chalk = require("chalk");

// get weather report for provided location
const weather_report = (location, cb) => {
  get_coords(location, (err, res) => {
    const lat = res.body.features[0].center[1];
    const long = res.body.features[0].center[0];

    const url =
      "http://api.weatherstack.com/current?access_key=8711759fff4b4c8e4743b744d0e7217c&query=" +
      lat +
      "," +
      long;

    request({ url: url, json: true }, (err, res) => {
      if (err) {
        cb("Error connecting weather service!", res);
      } else if (res.body.error) {
        cb("Unable to find location! " + res.body.error.info, res);
      }
      cb(undefined, res);
    });
  });
};

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
