const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=8711759fff4b4c8e4743b744d0e7217c&query=40,-75";

const request = http.request(url, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  res.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error occurred ==> " + error);
});

request.end();
