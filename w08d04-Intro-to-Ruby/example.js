let fruit = 'apple';
const PI = 3.14;

// PI = 4;
// console.log(fruit);
// console.log(PI);

const foo = (bar) => {
    console.log(`BAR ${bar}`);
    return 3 + 3;
}




// let x = foo(':)');
// console.log(x);

////////////////////////////////

// console.log(fruit + PI);

/////////////////////////////////

// const result = 10;

// if (result < 10 ) {
//     console.log("result is less than 10");
// } else if (result === 10) {
//     console.log("result is 10");
// } else {
//     console.log("result is more than 10");
// }

// if (true) console.log(":)");
// if (!false) console.log("run if false!");

//////////////////////////////////////////

// const arr = [1,2,3,4,'five', 'six', true, false, ['h','e']];

// console.log(arr);

// while
// c style for loop
// for, in of
// forEach, map, reduce, filter, 

arr.forEach((val, index, thisArr) => {
    console.log(index)
    console.log(val)
})

///////////////////////////////////////

const obj = {a:1, b:2, c:3};

console.log(obj);
console.log(obj.b);

Object.keys(obj).forEach(k => {
    console.log(`k=${k}     v=${obj[k]}`);
})

//////////////////////////////////////

const highOrder = cb => {
    console.log("START");
    cb(25);
    console.log("END");
}

highOrder((v) => {
    console.log("MIDDLE - v is =", v);
})
