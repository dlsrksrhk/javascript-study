async function throwError() {
  const fruits = await Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("apple");
      }, 1000);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("banana");
      }, 2000);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("grape");
      }, 3000);
    }),
  ]);

  console.log(fruits);
}

throwError();
