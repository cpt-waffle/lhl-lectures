let fruit = 'apple';
const PI  = 3.14;
var num = 12;


console.log(`${fruit}, ${PI}, ${num}`);
console.log(fruit + ' ' + PI);

const add = (numOne=0, numTwo=0) => {
   return numOne + numTwo;
}

console.log(add(2, 4));


// if statements ------

const val = 10;

if (val < 9) {
    console.log('Value is less than 9');
} else if ( val === 10) {
    console.log('Value is 10');
} else {
    console.log('Val is greater than 10');
}

if (true) console.log('if true');
if (!false) console.log("hello world :)");

const arr = [1,2,3,4,5,6, 'seven', 8.5, false];
console.log(arr);

// for, while, forEach
// for in for off

arr.forEach((item, index) => {
    console.log(`${index} -- ${item}`);
})

console.log(arr[3]);

// -------- Objects

const obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log(obj);
console.log(obj.b);

Object.entries(obj).forEach(entry => {
    console.log(`${entry[0]} --  ${entry[1]}`);
})


// Js CALLBACKS 
const foo = (fn) => {
    console.log("START");
    fn(33);
    console.log("END");
}
foo((num) => {
    console.log("CALLBACK RUNS " + num);
})