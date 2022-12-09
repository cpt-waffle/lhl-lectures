// variables

var a = 'letter';
let fruit = 'apple';
fruit = 'banana';
const PI = 3.14;
PI = 4 // error 

console.log(a);
console.log(fruit);
console.log(PI);

// Functions

const foo = (a,b,c,d,e) => {
    console.log("foo!");
    const result = a+b+c+d+e;
    return result;
}

const val = foo(1,2,3,4,5);
console.log(`value is,  ${val}`);

// if statements

const value = 10;

if (value < 10) {
    console.log("result is less than 10")
} else if (value === 10) {
    console.log("result is 10");
} else {
    console.log("value is greater than 10");
}

if (true) console.log(":)");
if (!false) console.log(":(");

// Arrays

const arr = [1,2,3, 'hello', false, [1,2]];

console.log(arr);

// for, while, forEach, map, reduce, filter..

arr.forEach((elem, i, arr) => {
    console.log(`elem => ${elem}`);
    console.log(`index => ${i}`)
})

// Objects

const obj = {a:1, b:2, c:3};


console.log(obj);
console.log(obj.b);
console.log(obj['c']);

Object.keys(obj).forEach(k => {
    console.log(`key: ${k}  val:= ${obj[k]}`)
})

// Callbacks

const highOrder = cb => {
    console.log("start");
    cb(5);
    console.log("end");
}

highOrder((num) => {
    console.log("CALLBACK!!", num);
});