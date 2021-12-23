const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

add(1, 3)
  .then((sum) => {
    add(sum, 7)
      .then((s) => {
        console.log(s);
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(sum);
  })
  .catch((e) => {
    console.log(e);
  });
