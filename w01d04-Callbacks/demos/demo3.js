// Write a function called printOnly      x
// where it takes an array and a callback x
// the callback will determine which elements to print


// a callback is a function that gets passed into another function
// we pass as parameters
const printOnly = function(array, callback) { // high order function
    for (let element of array) {
        if (callback(element))
        console.log(' element ---> ', element);
    }
}

const isNumber = function(value) {
    if (typeof value === 'number') {
        return true;
    } else {
        return false;
    }
}
// variables have values
// in functions we can pass variables
// or we can hardcode the values


// 6 falsey values in js
// false, 0, NaN, undefined, null, ''

const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];
printOnly(arr, (value) => {
    if (typeof value === 'number') {
        return true;
    } else {
        return false;
    }
});

// if your function is a 1 liner, you dont need brackets
// if your function is a 1 liner, and it RETURNS something, you dont need to put a return
// if your function HAS ONLY 1 PARAMETER, the () are optional
// scope .... 