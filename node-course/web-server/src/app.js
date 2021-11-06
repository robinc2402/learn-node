const path = require("path");
const express = require("express");

// initiate express
const app = express();

// defined an absolute path that will be used at all places in Express
const publicDirPath = path.join(__dirname, "../public");

// define a templates path (this will override the detault "views" directory path)
const viewsPath = path.join(__dirname, "../templates");

// set a setting in express object
app.set("views", viewsPath);

// set a setting in express object
app.set("view engine", "hbs");

// customise express server to pickup all static assets from the given path
app.use(express.static(publicDirPath));

// render index.hbs
// also send few variables to the page
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Robin Chalia"
  });
});

// render about.hbs
// also send few variables to the page
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Robin Chalia"
  });
});

// render help.hbs
// also send few variables to the page
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    name: "Robin Chalia"
  });
});

// capture the URL and send the response
app.get("/weather", (req, res) => {
  res.send({
    request: {
      type: "LatLon",
      query: "Lat 37.83 and Lon -122.42",
      language: "en",
      unit: "m"
    },
    location: {
      name: "North Beach",
      country: "United States of America",
      region: "California",
      lat: "37.806",
      lon: "-122.411",
      timezone_id: "America/Los_Angeles",
      localtime: "2021-11-05 12:35",
      localtime_epoch: 1636115700,
      utc_offset: "-7.0"
    },
    current: {
      observation_time: "07:35 PM",
      temperature: 14,
      weather_code: 116,
      weather_icons: [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
      ],
      weather_descriptions: ["Partly cloudy"],
      wind_speed: 9,
      wind_degree: 220,
      wind_dir: "SW",
      pressure: 1020,
      precip: 0,
      humidity: 75,
      cloudcover: 75,
      feelslike: 14,
      uv_index: 3,
      visibility: 16,
      is_day: "yes"
    }
  });
});

app.listen(3000, () => {
  console.log("Sever is running on port 3000");
});
