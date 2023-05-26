// variables
var a = 'letter';
let fruit = 'apple';
const PI = 3.14;

// console.log(a, fruit, PI);

// functions

const foo = (a=0,b=0) => {
  console.log("hello world");
  const result = a + b;
  return result;
}

// console.log(foo());

// if statements
const v = 10;

if (v < 10) {
  console.log('v is less than 10');
} else if (v === 10) {
  console.log('v is 10');
} else {
  console.log('v is greater than 10');
}

if (v) console.log('v is truthy');
if (!false) console.log(":(");


// Arrays 
const arr = [1,2,3, 'four', 'five', [6,7], false];

console.log(arr[4]);

// for in, for of, c style for loop, forEach, map, reduce, filter

arr.forEach((item, index) => {
    console.log(`${item} at index ${index}`);
})

// Objects

const obj = {a:1, b:2, c:3}
obj.e = 5;

console.log(obj);
console.log(obj.a)
console.log(obj['a']);
console.log(obj.e);
console.log(obj['e']);

for (let key in obj) {
    console.log('----');
    console.log(key);
    console.log(obj[key])
    console.log('----');
}

// Object.keys(obj).forEach((key) => { ... })


// Callbacks
const highOrder = cb => {
    console.log("before");
    cb(5);
    console.log("after");
}

highOrder((num) => {
    console.log("CALLBACK FUNCTION!", num)
});