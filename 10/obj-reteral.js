const x = 1,
  y = 2;

const obj = { x, y };
obj[`property${x}`] = "value1";
obj[`property${y}`] = "value2";

console.log(obj); // { x: 1, y: 2, property1: 'value1', property2: 'value2' }

const user = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

user.greet(); // Hello, my name is John
