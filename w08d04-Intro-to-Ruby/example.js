//const let var


let fruit = 'apple';
var fruit2 = 'banana';
const PI = 3.14;

console.log(fruit, fruit2, PI);

// creating a function
const addTwo = (numOne, numTwo) => {
    console.log("Calculating...");
    return numOne + numTwo;
}

console.log(addTwo(2,2,3,4,5,6,7,87,8,9,10));

const val = 10;

if ( val <= 9) {
    console.log("val is less than 10");
} else if (val === 10) {
    console.log("val is is equal to 10");
} else {
    console.log("Val is greater than 10");
}

if (true) console.log("Its true");

if (!true === false) console.log("this is not true!");

const arr = [1,2,3,4,5,6,7,8,9,10];
// for, while, c-style, forEach, map...

arr.forEach((elem, index) => {
    console.log(`elem! ${elem} at index ${index}`)
})



const obj = {
    a: 1,
    b: 2,
    c: 3,
}

console.log(obj['a']);

Object.keys(obj).forEach(e => {
    console.log('key name ', e, 'value = ', obj[e]);
})

const highOrder = (cb) => {
    console.log("start");
    cb(33);
    console.log("finish");
}

highOrder((num) => {
    console.log("CB is running", num);
})