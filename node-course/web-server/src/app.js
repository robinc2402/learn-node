const path = require("path");
const express = require("express");
const hbs = require("hbs");

// initiate express
const app = express();

// define paths for Express config
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and "views" location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
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

app.get("/help/*", (req, res) => {
  res.send("Help article not found!");
});

// fallback route (it works in case there was no match found above)
app.get("*", (req, res) => {
  res.send("My 404 page!");
});

// capture the URL and send the response
app.get("/weather", (req, res) => {
  res.send({
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
