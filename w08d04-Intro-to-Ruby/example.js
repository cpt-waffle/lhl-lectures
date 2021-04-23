let foo = 20; // variable can change
const PI = 3.14; // constant variable

console.log("foo: " + foo);
console.log(`PI ${PI}`);

const method = (arg1) => {
    console.log("arg1");
    console.log(arg1);
}

method('hello', 1, 2, 3, 4, 5, 6);

const val = 10;

if (val <= 9) {
    console.log('it was less than 9');
} else if (val === 10) {
    console.log("val is 10 exactly!")
} else {
    console.log("val is greater than 10!!")
}

if (val === 10) console.log('it was 10!!');

if (!(val < 4)) console.log('it was not less than 4');


const arr = [1,2,3,4,5];

console.log(arr);

arr.forEach((elem, index) => {
    console.log('--->', elem, index)
})


const obj = {
    a: 1,
    b: 2,
    'hello': [1,2,3,4]
}

let a = obj["hello"];
a.push(5)

console.log(obj);





for (let key in obj) {
    console.log('val --> ');
    console.log(obj[key]);
}

const cbExample = (arr, cb) => {
    console.log("---- array loop -----");
    arr.forEach( (elem, i) => {
        cb(elem, i)
    })
}

cbExample([1,2,3,4,5], (item, i) => {
    console.log(`value is ${item} at index ${i}`);
})