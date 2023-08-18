// Variables
let fruit = 'apple';
a = 'letter';
const PI = 3.14;

console.log(fruit);
console.log(a);
console.log(PI);

// Functions 

const foo = (a=0,b=0) => {
  console.log("this is my function");
  return a + b;
}

const result = foo(9);
console.log(result);

// If Statements

const value = 10;

if (value < 10) {
  console.log('value is less than 10');
} else if (value === 10) {
  console.log("Value is 10");
} else {
  console.log("value is greater than 10");
}

if (value === 10) console.log(" :) ");

if (value !== 0) console.log("it wasnt 0 :|");

// Arrays

const array = [1,2,3, 'four', 'five', [6,7,8]];

console.log(array);

console.log(array[0]);

//  looping through arrays
// for, while, forEach, map, reduce, filter, findOne, etc
array.forEach((num, index) => {
  console.log("------");
  console.log(`${num} --> ${index}`);
  console.log("------");
})

// Objects

const obj = {a:1, b:2, c:3};

console.log(obj);
console.log(obj.a);
console.log(obj['a']);

Object.keys(obj).forEach(key => {
  console.log(`the key is ${key}`);
  console.log(`the val is ${obj[key]}`);
})

// callbacks

const highOrder = cb => {
  console.log("before");
  cb(5);
  console.log('after');
}

highOrder(num => {
  console.log("CALLBACK IS RUNNING NOW!", num);
});