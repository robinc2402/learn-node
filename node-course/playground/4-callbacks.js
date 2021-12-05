const doWorkCallback = (callback) => {
  setTimeout(()=>{
    // callback('This is my error', undefined)
    callback(undefined, [1,4,3])
  }, 2000)
}

doWorkCallback((err, res)=>{
  if(err){
    return console.log(err);
  }
  console.log(res)
});

// setTimeout(() => {
//   console.log("2 seconds timer");
// }, 2000);

// const geocode = (location, callback) => {
//   setTimeout(() => {
//     const data = {
//       lat: 123,
//       long: -456
//     };
//     callback(data);
//   }, 2000);
// };

// geocode("Gurugram", (data) => {
//   console.log(data);
// });

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b);
//   }, 2000);
// };
//
// add(19, 4, (sum) => {
//   console.log(sum); // Should print: 5
// });
