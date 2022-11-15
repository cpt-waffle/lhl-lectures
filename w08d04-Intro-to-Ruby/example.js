// variables

let fruit = 'apple';
fruit = 'banana';
const PI = 3.14;

console.log(fruit);
console.log(PI);

// Functions

const foo = (bar, a, b, c) => {
    console.log("hello world");
    return 20;
}

const result = foo();

 console.log(`result is ${result}`);

// If statements

const result = 10;

if (result < 10) {
    console.log("result is less than 10");
} else if (result === 10) {
    console.log("result is 10");
} else {
    console.log("result is greater than 10");
}

if (true) console.log(":)");
if (!false) console.log(":(");

// Arrays and For loops

const arr = [1,2,3, 'hello', false, [1,2]];

console.log(arr[0]);
console.log(arr);

// Looping through arrays

// for, while, forEach, 

arr.forEach((val, index) => {
    console.log("Val is ", val);
    console.log("Index is ", index);
    console.log('------------');
})

// Objects

const obj = {a:1, b:2, c:3}


console.log(obj);
console.log(obj.a);
console.log(obj["b"]);

Object.keys(obj).forEach(key => {
    console.log(`key=${key}     val=${obj[key]}`)
})

const highOrder = cb => {
    console.log('start');
    cb(4);
    console.log('end');
}

highOrder((num) => {
    console.log("Middle!", num);
})