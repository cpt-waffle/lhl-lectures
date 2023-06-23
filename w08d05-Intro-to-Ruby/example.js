// variables

var a = 'letter';
let fruit = 'apple';
const PI = 3.14;

PI = 4;

console.log(a);
console.log(fruit);
console.log(PI);

// functions

const foo = (a=0,b=0) => {
  console.log(a+b);
  const result = a + b;
  return result;
}

const r = foo(4,2)
console.log('r is ', r);

// if statements

const value = 10;

if (value < 10) {
  console.log("value is less than 10");
} else if (value === 10) {
  console.log("value is 10");
} else {
  console.log("value is greater than 10");
}

if (value === 10) console.log("value is 10 again :)");
if (!false) console.log("its not 9");

// Arrays

const array = [
  1,2,3,4,5,
  'six', 'seven', 'eight',
  [1,2,3]
]

console.log(array);

array.forEach((elem, index) => {
  console.log(`element: ${elem} at index ${index}`);
})

// Objects

const obj = {a:1, b:2, c:3};

console.log(obj.a);
console.log(obj['a']);
// for (let key in obj)
Object.keys(obj).forEach( key =>  {
  console.log("--------");
  console.log(key);
  console.log(obj[key]);
  console.log("--------");
})
callbacks

const highOrder = cb => {
  console.log('before');
  cb(5);
  console.log('after');
}

highOrder((num) => {
  console.log("CALLBACK RUNS~~  ", num);
});