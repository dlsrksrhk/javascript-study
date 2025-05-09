console.log(...[1, 2, 3, 4, 5]); //1 2 3 4 5

console.log(..."hello"); //h e l l o

console.log(...new Set([1, 2, 3, 4, 5])); //1 2 3 4 5

console.log(
  ...new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
); //["a", 1] ["b", 2] ["c", 3]

const obj = { a: 1, b: 2, c: 3 };
const newObj = { ...obj, c: 4 }; //{ a: 1, b: 2, c: 4 }
console.log(newObj);

console.log(...[1, 2, 3]);
console.log(1, 2, 3);

const arr = [5, 4, 3, 7];
const max = Math.max(...arr);
//const max = Math.max(5, 4, 3, 7);
console.log(max); //7

function printArr(...arr) {
  console.log(arr); //1, 2, 3 => [1, 2, 3]
}

printArr(1, 2, 3);

const list1 = [1, 2, 3];
const list2 = [4, 5, 6];
const list3 = [...list1, ...list2]; // [1, 2, 3, 4, 5, 6]
console.log(list3);
