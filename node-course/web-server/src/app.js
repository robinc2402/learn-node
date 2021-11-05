const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hello Express!!");
});

app.get("/about", (req, res) => {
  res.send("You are on About page.");
});

app.get("/help", (req, res) => {
  res.send("Help page it is.");
});

app.get("/weather", (req, res) => {
  res.send("This is a weather page.");
});

app.listen(3000, () => {
  console.log("Sever is running on port 3000");
});
