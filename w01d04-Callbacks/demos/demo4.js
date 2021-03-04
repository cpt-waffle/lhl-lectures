// make a function that loops through the array
// and also takes a callback for the user to do anything with
// each value of the array..

const array = [1,2,3,4,6,7,8,9,10];

//               es5 notation
//               es6 notation ---> arrow notation ---> arrow functions
// function () { ... }
const arrLoop = (arr, callback) => {
    for (let item of arr) {
        callback(item);
    }
}


let sum = 0;

arrLoop(array, (val) => {
    sum+= val;
})
console.log(sum);

const evenNumbers = [];
arrLoop(array, (val) => {
    if (val % 2 === 0) {
        evenNumbers.push(val);
    }
})
console.log(evenNumbers);

