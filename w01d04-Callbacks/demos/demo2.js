// write a function that takes an array as an argument.
// then it prints out ONLY numbers from this array.
const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];

const printNumbers = function(arr) {
    const result = [];
    // for (let i = 0; i < arr.length - 1; i++)
    // for of    [44,23,54,73,32] ===> 44, 23, 54, 73 ..
    // for in    [44,23,54,73,32] ===> 0, 1, 2, 3, 4, 5,
    for (let element of arr) {
        if (typeof element === 'number') {
            result.push(element);
        }
    }
    console.log(result);
}

printNumbers(arr);




// write a function that takes an array as an argument.
// then it prints out ONLY strings from this array.
// two, four, six, eight, ten


const printStrings = function(arr) {
    const result = [];
    for (let element of arr) {
        if (typeof element === 'string') {
            result.push(element);
        }
    }
    console.log(result);
}

printStrings(arr);