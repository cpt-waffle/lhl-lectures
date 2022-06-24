let fruit = 'apple';
const PI = 3.14;

console.log(fruit);
console.log(PI);

console.log(fruit + PI);
console.log(`${fruit} ${PI}`);

const foo = (bar) => {
    console.log("BAR",  bar);
    return 22;
}

foo();
const result1 = foo(':)');
console.log(result1);

const result = 10;

if (result < 10) {
    console.log("result is less than 10");
} else if (result === 10) {
    console.log("result is 10");
} else {
    console.log("result is greater than 10");
}

if (result == 10) console.log(":)");
if (!false) console.log("it wasn't false");

const arr = [1,2,3,4,'five', 'six', true, false];
console.log(arr);

// while
// for C style
// for in, for of
// .forEach, .map, .reduce, .filter

arr.forEach((elem, index, currentArr) => {
    console.log("elem", elem, index)
})

const obj = {a:1, b:2, c:3};
console.log(obj);
console.log(obj.a);

// for in
// Object.keys(obj).forEach
Object.keys(obj).forEach(k => {
    console.log(`key: ${k} value: ${obj[k]}`);
})

const highOrder = cb => {
    console.log("START");
    cb(25);
    console.log("END");
}

highOrder((num) => {
    console.log("CALLBACK RAN!!", num);
});

