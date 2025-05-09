const arr = [];
arr[1] = 3;
arr[2] = 4;
arr[3] = 5;

const [a = 3, b, c, d] = arr;
console.log(a); //1
console.log(b); //2
console.log(c); //3
console.log(d); //5

// const arr = [1, 2, 3];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a); //1
// console.log(b); //2
// console.log(c); //3

const obj = { name: "John", age: 30, city: "New York" };
const { name = "gildong", age = 17, city = "seoul" } = obj;

// console.log(nm); //John
// console.log(ag); //30
// console.log(obj); //New York

// const obj = { name: "John", age: 30, city: "New York" };

// const nm = obj.name;
// const ag = obj.age;
// const ct = obj.city;

// console.log(nm); //John
// console.log(ag); //30
// console.log(ct); //New York

function printTodo(todo) {
  const { title, completed } = todo;
  console.log(`Titile : ${title}`); //Titile : Learn JavaScript
  console.log(`Completed : ${completed}`); //Completed : false
}

printTodo({ title: "Learn JavaScript", completed: false });
