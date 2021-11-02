// NodeJS nature
// 1. Non-blocking
// 2. Asynchronous
// 3. Single threaded
// 4. Event driven

// Example to see Non-blocking and Asynchronous
console.log("Starting");

setTimeout(() => {
  console.log("2 second timer");
}, 2000);

console.log("Stopping");
