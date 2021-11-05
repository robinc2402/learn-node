const request = require("postman-request");
const geo_code = require("./geocode");

const forecast = ({ lon, lat }, cb) => {
  const url =
    "http://api.weatherstack.com/current?access_key=8711759fff4b4c8e4743b744d0e7217c&query=" +
    lat +
    "," +
    lon;
  request({ url: url, json: true }, (err, { body }) => {
    //console.log(res.body.current);
    //console.log(res.body.error);
    //console.log(err);
    //return false;
    if (err) {
      cb("Error connecting weather service!", body);
    } else if (body.error) {
      cb("Unable to find location! " + body.error.info, body);
    } else {
      cb(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees. It feels like " +
          body.current.feelslike +
          " degrees out. There is a " +
          body.current.precip +
          "% chance of rain."
      );
    }
  });
};
module.exports = forecast;
