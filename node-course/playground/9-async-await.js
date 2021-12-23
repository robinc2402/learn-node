const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  // return "test";
  const sum1 = await add(5, 9);
  const sum2 = await add(sum1, 9);
  return await add(sum2, 9);
};

// Async functions always return a Promise
// Benefits:
// 1. Things run in order even though the things are happening Asynchronously behind the scenes
// 2. Easy to work with instead of Multiple chained one after the other (easily mis-understood what is happening).
// 3. Results/Values returned by Promise(s) remain in scope for other Promises.

doWork()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
