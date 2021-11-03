const request = require("postman-request");
const chalk = require("chalk");

const mb_url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Gurugram.json?access_token=pk.eyJ1Ijoicm9iaW5jMjQwMiIsImEiOiJja3ZqZmtzdDM4cmd6Mm9wZ24wbGJ2cG55In0.Y_bWsQlBB_ptW76hUni5zw";

request({ url: mb_url, json: true }, (err, res) => {
  if (err) {
    console.log(chalk.red.inverse("Some error occured!"));
    return false;
  } else if (!("features" in res.body) || !res.body.features.length) {
    console.log(chalk.red.inverse("Unabled to find location!"));
    return false;
  }

  const lat = res.body.features[0].center[1];
  const long = res.body.features[0].center[0];

  const url =
    "http://api.weatherstack.com/current?access_key=8711759fff4b4c8e4743b744d0e7217c&query=";

  request({ url: url, json: true }, (err, res) => {
    console.log(res.body.error);
    if (err) {
      console.log(chalk.red.inverse("Error connecting weather service!"));
      return false;
    } else if (res.body.error) {
      console.log(
        chalk.red.inverse("Unable to find location! " + res.body.error.info)
      );
      return false;
    }

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
  });
});
