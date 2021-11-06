const request = require("postman-request");
// get lat-long for given location
const get_coords = (location, cb) => {
  const mb_url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(location) +
    ".json?access_token=pk.eyJ1Ijoicm9iaW5jMjQwMiIsImEiOiJja3ZqZmtzdDM4cmd6Mm9wZ24wbGJ2cG55In0.Y_bWsQlBB_ptW76hUni5zw";

  request({ url: mb_url, json: true }, (err, res) => {
    if (err || res === "undefined") {
      cb("Some error occured!", res);
    } else if (!("features" in res.body) || !res.body.features.length) {
      cb("Unabled to find location!", res);
    }
    cb(undefined, res);
  });
};

// get weather report for provided location
const weather_report = (location, cb) => {
  get_coords(location, (err, { body }) => {
    const lat = body.features[0].center[1];
    const long = body.features[0].center[0];

    const url =
      "http://api.weatherstack.com/current?access_key=cf5149980c3a703608488f172b49dab1&query=" +
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

module.exports = weather_report;
