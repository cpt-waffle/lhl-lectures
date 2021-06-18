

let fruit = 'apple';
const PI = 3.14;
console.log('Fruit ' + fruit);
console.log(`PI  ${PI}`);

const method = (arg1, arg2) => {
    console.log("calculating...");
    return arg1 + arg2;
}

const answer = method(2, 2, 45, 33, false, 'hello');
console.log(answer);

const val = 10;

if (val <= 9) {
    console.log("the val is less than 9")
} else if ( val === 10) {
    console.log("the val is exactly 10");
} else {
    console.log('the val is greater than 10');
}

if (val === 10) console.log("AGAIN THE VAL IS 10");

let falseyVal = false;

if (!falseyVal) console.log('WTF?');

const array = [1,2,3,4,5];

console.log(array[array.length - 2]);

array.forEach((e, i) => {
    console.log(e, i);
})

const obj = {
    b: 2,
    a: 1,
    c: 3,
    "hello world": 44
}

console.log(obj.a);

for (let key in obj) {
    console.log(`${key} --> ${obj[key]}`)
}

const cbExample = (num, cb) => {
    console.log('----------');
    console.log('num   ', num);
    cb(num)
}

cbExample(33, (arg0) => {
    console.log("INSIDE OF CALLBACK ", arg0);
})