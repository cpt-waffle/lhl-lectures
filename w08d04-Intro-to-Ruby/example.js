let fruit = 'apple';
var num = 44;
const PI = 3.14;

// console.log(fruit, num, PI);

const addThree = (arg0, arg1, arg2) =>{
    console.log("Calculating....");

    return arg0 + arg1 + arg2;
}

// console.log(addThree(5, 5, 5, 5, 5, 5));


// const val = 10;

// if (val < 9) {
//     console.log("value is less than 9");
// } else if (val == 10) {
//     console.log("value is 10");
// } else {
//     console.log("value is greater than 10");
// }

// if (true) console.log("this is true!!");

// if (!true == false) console.log("NOT TRUE");

//template literals
let number = 3;
let name = "Paul";

// console.log(`${name} - ${number}`);

const arr = [1,2,3,4,5,6,7,8,9,10];

// console.log(arr[3]);

// // while, for, forEach

// arr.forEach((element, index, currArr) => {
//     console.log("Index at ==>", index);
//     console.log("elem is -> ", element);
// })

const obj = {
    a: 1,
    b: 2,
    c: 3,
    "hello world": 33
}

// console.log(obj);
// console.log(obj.a);
// console.log(obj["b"]);
// console.log(obj["hello world"]);

// Object.keys(obj).forEach((key) => {
//     console.log(`${key} ===${obj[key]}`);
// })

const highOrder = (cb) => {
    console.log("START");
    cb(4);
    console.log("END");
}

highOrder((a) => {
    console.log("CALLBACK RUNS!!");
})