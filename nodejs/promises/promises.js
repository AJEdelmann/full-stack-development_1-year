// const bab = true;

// const promise = new Promise((resolve, reject) => {
//   if (bab) resolve("I have been resolved");
//   else reject("I have been rejected");
// });

// console.log(promise);
///////////////////
// Promise example
///////////////////

// const promise = new Promise((resolve, reject) => {
//   const randomNumber = Math.random();
//   console.log(randomNumber);
//   if (randomNumber > 0.5) resolve("All things are good");
//   else reject(new Error("All things went baaad"));
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
///////////////////
// Chaining Promises
///////////////////

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 is resooooolved");
//   }, 4000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 2 is resooooolved");
//   }, 4000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 3 is resooooolved");
//   }, 4000);
// });

// promise1.then(data => {
//   console.log(data);
//   promise2.then(data => {
//     console.log(data);
//     promise3.then(data => {
//       console.log(data);
//     });
//   });
// });

// console.log("I am startiiiing");

// promise1
//   .then(data => {
//     console.log(data);
//     return promise2;
//   })
//   .then(data2 => {
//     console.log(data2);
//     return promise3;
//   })
//   .then(data3 => {
//     console.log(data3);
//   });

// Promise.all([promise1, promise2, promise3])
//   .then(data => {
//     const [res1, res2, res3] = data;
//     console.log(data);
//   })
//   .catch(error => console.log(error));

///////////////////
// TIMEOUT
///////////////////

// console.log(new Date().getTime());

// setTimeout(() => {
//   console.log("I am inside a timeout", new Date().getTime());
// }, 2000);

///////////////////
// ASYNC / WAIT
///////////////////

// printAMessage = () => {
//   return new Promise(resolve => {
//     resolve("I am the message that should be printed");
//   });
// };

// printAMessageRejected = () => {
//   return new Promise((resolve, reject) => {
//     reject("I am the message that should be rejecteeed");
//   });
// };
// // printAMessage().then(data => {
// //   console.log(data);
// // });

// callMyFunction = async () => {
//   try {
//     const msg = await printAMessage();
//     const msg21 = await printAMessageRejected();
//     const msg24 = await printAMessage();

//     console.log("Message:", msg, msg21, msg24);
//   } catch (error) {
//     console.log(error);
//   }
// };

// callMyFunction();
// console.log("life");

///////////////////
// PROMISIFYYYYYY
///////////////////

const fs = require("fs");
const { promisify } = require("util");

// fs.readFile("./data.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const myReadFileAsync = promisify(fs.readFile);

myReadFileAsync("./data.txt", "utf8").then(data => {
  console.log(data);
});
