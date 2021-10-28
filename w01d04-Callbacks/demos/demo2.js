// write a function that takes an array as an argument.
// then it prints out ONLY numbers from this array.
const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];


const printOnlyNumbers = function(arr) {
    // loop through this arr
    for (let val of arr) {
        if (typeof val === 'number') {
            console.log(val);
        }
    }
    // and if i see a number i will print it

}

printOnlyNumbers(arr);

// write a function that takes an array as an argument.
// then it prints out ONLY strings from this array.
// two, four, six, eight, ten

const printOnlyStrings = (arr) => {
    for (let val of arr) {
        if (typeof val === 'string') {
            console.log(val);
        }
    }
}
printOnlyStrings(arr);