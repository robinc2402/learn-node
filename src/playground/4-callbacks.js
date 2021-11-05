setTimeout(() => {
  console.log("2 seconds timer");
}, 2000);

const geocode = (location, callback) => {
  setTimeout(() => {
    const data = {
      lat: 123,
      long: -456
    };
    callback(data);
  }, 2000);
};

geocode("Gurugram", (data) => {
  console.log(data);
});
