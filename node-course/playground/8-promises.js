const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// add(1, 3)
//   .then((sum) => {
//     add(sum, 7)
//       .then((s) => {
//         console.log(s);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//     console.log(sum);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

add(1, 1)
  .then((sum) => {
    console.log(sum);
    return add(sum, 4);
  })
  .then((sum2) => {
    console.log(sum2);
    return add(sum2, 4);
  })
  .then((sum3) => {
    console.log(sum3);
  })
  .catch((e) => {
    console.log(e);
  });
