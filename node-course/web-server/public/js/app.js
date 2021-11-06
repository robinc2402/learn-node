fetch("https://fjdyu.sse.codesandbox.io/weather?address=Gurugram").then(
  (res) => {
    res.json().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
      }
    });
  }
);
