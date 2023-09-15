// Variables
let fruit = 'banana';
const PI = 3.14;
// PI = 4;
b = 'a random lettter';

console.log(fruit);
console.log(PI);
console.log(b);
// --------------------

// Functions

const foo = (a=0, b=0) => {
  console.log("this is a function~!");
  console.log(`${a} + ${b} = ${a + b}`)
  a + b;
}

const result1 = foo(9);
console.log('result:',  result);

// if statements

const value = 10;

if (value < 10 ) {
  console.log('value is less than 10');
} else if (value === 10) {
  console.log('value is 10');
} else {
  console.log('value is greater than 10');
}

if (value === 10) console.log(":)");
if (value !== 0 ) console.log('value is not 0');

// Arrays

const array = [1,2,3, 'four', false, [4,5,6]]

console.log(array);
console.log(array[3]);

// for, while,  forEach, map...

array.forEach((num, index, arr) => {
  console.log("our number at iterator: ", num, index);
})

// Objects

const obj= {a: 1, b:2, c:3};

console.log(obj);
console.log(obj.a);
console.log(obj['a']);


Object.keys(obj).forEach(key => {
  console.log(`key=${key}   val=${obj[key]}`);
})

// Callbacks

const highOrder = callback => {
  console.log('beginning');
  callback(5);
  console.log('end');
}

highOrder((num) => {
  console.log(`middle callback :) ${num}`)
});