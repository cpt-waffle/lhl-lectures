// variables 

let fruit = 'apple';
var num = 12;
const PI = 3.14;

console.log(fruit, num, PI);

// functions, block of code that can be executed

const addFour = (arg0, arg1, arg2, arg3) => {
    console.log("Calculating...");
    console.log(arg0 + arg1 + arg2 + arg3);
    return arg0 + arg1 + arg2 + arg3;
}


const value = addFour(2,2,2,2,5,5,5,5);
console.log(`Value---  + ${value}`);

// If statements in JS

const val = 10;

if (val < 9) {
    console.log('Value is less than 9');
} else if ( val === 10) {
    console.log('Value is exactly 10');
} else {
    console.log('Value is greater than 10');
}

if (true) console.log('true');

if (!true === false) console.log('value is false');


// arrays 

const arr = [1,2,3,4]

console.log(arr);

// for, forEach, while
//   for in, for Of
arr.forEach((val, index) => {
    console.log(`index is ${index}, val => ${val}`);
})

// Objects


const obj = {
    a:1,
    b:2,
    c:3,
    'D is': 4
}

console.log(obj);

// square bracket notation
console.log(obj['a']);
// // dot notation
console.log(obj.a);

Object.keys(obj).forEach((key) => {
    console.log("key is -->", key);
    console.log("val is -->", obj[key]);
    console.log('-------------');
})

// Callbacks

const highOrder = (cb) => {
    console.log("START");
    cb(33);
    console.log("END");
}

highOrder((a) => {
    console.log("~~~CALLBACK RUNS~~~", a)
})