const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=8711759fff4b4c8e4743b744d0e7217c&query=37.8267,-122.4233";

request({ url: url, json: true }, (err, res) => {
  console.log(res);

  console.log(
    res.body.current.weather_descriptions[0] +
      ". It is currently " +
      res.body.current.temperature +
      "degrees. It feels like " +
      res.body.current.feelslike +
      " degrees out. There is a " +
      res.body.current.precip +
      "% chance of rain."
  );
});
