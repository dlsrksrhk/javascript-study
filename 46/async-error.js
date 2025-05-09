// new Promise((resolve, reject) => {
//   console.log("Start of Promise");
//   resolve("Apple");
// })
//   .then((value) => {
//     console.log(value);
//     console.log("End of Promise");
//   })
//   .then((value) => console.log("End of script"));

// new Promise((resolve, reject) => {
//   console.log("Start of Promise");
//   reject("Error in promise");
// }).catch((error) => console.log("error !!"));
// console.log("End of script");

// async function throwError() {
//   console.log("Start of Function");
//   await new Promise((resolve, reject) => {
//     reject("Error in promise");
//   });

//   console.log("End of Function");
// }

async function throwError() {
  console.log("Start of Function");
  try {
    await new Promise((resolve) => {
      console.log("Start of Promise");
      throw new Error("Error in promise");
    });
  } catch (error) {
    console.error(error);
  }

  console.log("End of Function");
}

throwError();
console.log("End of script");

// new Promise((resolve) => {
//   console.log("Start of Function");

//   new Promise((resolve) => {
//     throw new Error("Error in promise");
//   }).catch((value) => {
//     console.log("End of Function");
//   });
// });
// console.log("End of script");

// async function emptyFunction() {
//   console.log("Start of Function");

//   await new Promise((resolve) => {
//     console.log("Start of Promise");
//     resolve("End of Promise");
//   });

//   console.log("End of Function");
// }

// const a = emptyFunction();
// console.log(a); // undefined
