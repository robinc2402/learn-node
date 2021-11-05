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

module.exports = get_coords;
