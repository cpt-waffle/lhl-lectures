// write a function that takes an array as an argument.
// then it prints out ONLY numbers from this array.
const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];
//           0,  1    2    3     4 

const printOnlyNumbers = function(array) {
  for (let val of array) {
    if (typeof val === 'number')
      console.log(val);
  }
}

printOnlyNumbers(arr);


// write a function that takes an array as an argument.
// then it prints out ONLY strings from this array.

const printOnlyStrings = function(array) {
  for (let val of array) {
    if (typeof val === 'string')
      console.log(val);
  }
}

printOnlyStrings(arr);