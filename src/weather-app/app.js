const request = require("postman-request");
const weather_report = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");
const chalk = require("chalk");

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

weather_report("Gurugram", (err, res) => {
  if (err) {
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
