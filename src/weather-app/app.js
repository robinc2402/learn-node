const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=8711759fff4b4c8e4743b744d0e7217c&query=37.8267,-122.4233";

request({ url: url }, (err, res) => {
  const data = res.body;
  console.log(JSON.parse(data));
});
