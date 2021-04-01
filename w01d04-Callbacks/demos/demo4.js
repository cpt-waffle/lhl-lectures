// make a function that loops through the array
// and also takes a callback for the user to do anything with
// each value of the array..

const array = [1,2,3,4,6,7,8,9,10];

const ourLoop = function(arr, callback) {
    for (let index in arr) {
        callback(arr[index]);
    }
}

const arr = [];
ourLoop(array, function(elem) {
    arr.push(elem * 3);
})

// console.log(arr);
const myCB = function(v,i) {
    console.log(v);
    console.log(i);
}

arr.forEach(myCB);

array.forEach(function(a, b, c) {
    console.log("what is a?");
    console.log(a);
    console.log("What is b?");
    console.log(b);
    console.log("what is c?");
    console.log(c);
})

// ES5 function
const myFunction = function (a) {
    console.log(this);
}

// ES6 function
const myFunctionES6 = (a,b,c) => {
    console.log();
}

myFunction()
console.log("--------")
myFunctionES6();


