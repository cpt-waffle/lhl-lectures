// Variables

var a = 'letter';
let fruit = 'apple';
const PI = 3.14;
// PI = 4;

console.log(a, fruit, PI);

// Functions

const foo = (a=0,b=0,c=0) => {
    console.log("a,b,c");
    
    const result = a + b + c;
    return result;
}

console.log(foo());

// if statements...

const v = 10;

if (v < 10) {
    console.log("v is less than 10");
} else if (v === 10) {
    console.log("v is 10")
} else {
    console.log("v is greater than 10");
}

// one liner if statements

if (true) console.log(":)");
if (!false) console.log(":(");


// Arrays

const arr = [1,2,3, 'hello', true, [1,2]];

// console.log(arr[3])

// for, forEach, while, for i = 0, 

arr.forEach((v, i, a) => {
    console.log(`${i} -- ${v}`);
    console.log(i + ' -- ' + v);
})

// Objects

const obj = {a:1, b:2, c:3};



console.log(obj);
console.log(obj.b);

Object.keys(obj).forEach(key => {
  console.log(`key ${key}, val= ${obj[key]}`);
})

// Callbacks

const highOrder = cb => {
  console.log('start');
  cb(5)
  console.log('end');
}

highOrder((num) => {
    console.log("callback", num);
});