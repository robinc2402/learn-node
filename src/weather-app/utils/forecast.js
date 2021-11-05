const request = require("postman-request");
const geo_code = require("./geocode");

const forecast = (lat, long, cb) => {
  const url =
    "http://api.weatherstack.com/current?access_key=8711759fff4b4c8e4743b744d0e7217c&query=" +
    long +
    "," +
    lat;
  request({ url: url, json: true }, (err, res) => {
    //console.log(res.body.current);
    //console.log(res.body.error);
    //console.log(err);
    //return false;
    if (err) {
      cb("Error connecting weather service!", res);
    } else if (res.body.error) {
      cb("Unable to find location! " + res.body.error.info, res);
    } else {
      cb(
        undefined,
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
};
module.exports = forecast;
