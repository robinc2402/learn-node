const request = require("postman-request");

const mb_url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicm9iaW5jMjQwMiIsImEiOiJja3ZqZmtzdDM4cmd6Mm9wZ24wbGJ2cG55In0.Y_bWsQlBB_ptW76hUni5zw";

request({ url: mb_url, json: true }, (err, res) => {
  const lat = res.body.features[0].center[1];
  const long = res.body.features[0].center[0];
  console.log(lat, long);
});

// const url =
//   "http://api.weatherstack.com/current?access_key=8711759fff4b4c8e4743b744d0e7217c&query=37.8267,-122.4233";

// request({ url: url, json: true }, (err, res) => {
//   console.log(res);

//   console.log(
//     res.body.current.weather_descriptions[0] +
//       ". It is currently " +
//       res.body.current.temperature +
//       "degrees. It feels like " +
//       res.body.current.feelslike +
//       " degrees out. There is a " +
//       res.body.current.precip +
//       "% chance of rain."
//   );
// });
