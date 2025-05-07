const func1 = () => {
  return new Promise((resolve) => setTimeout(() => resolve("apple"), 3000));
};

const func2 = () => {
  return new Promise((resolve) => setTimeout(() => resolve("banana"), 2000));
};

const func3 = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("grape is rejected"), 2500)
  );
};

const res = [];
// Promise.all([func1(), func2(), func3()])
//   .then((results) => {
//     res.push(...results);
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// func1()
//   .then((result) => {
//     res.push(result);
//     console.log(res);
//     return func2();
//   })
//   .then((result) => {
//     res.push(result);
//     console.log(res);
//     return func3();
//   })
//   .then((result) => {
//     res.push(result);
//     console.log(res); // [1, 2, 3]
//   });

Promise.all(["apple", "banana", "grape"]).then((results) => {
  res.push(...results);
  console.log(res);
});
