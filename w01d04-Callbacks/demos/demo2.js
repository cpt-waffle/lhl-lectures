// write a function that takes an array as an argument.
// then it prints out ONLY numbers from this array.
const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];
//           0,  1    2    3     4 

const printOnlyNumbers = function(array) {
  //          of - val
  //          in - index
  for (let num of array) {
    if (typeof num === 'number') {
      console.log(num);
    }
  }
}

printOnlyNumbers(arr);

// write a function that takes an array as an argument.
// then it prints out ONLY strings from this array.

const printOnlyStrings = function(array) {
  //          of - val
  //          in - index
  for (let num of array) {
    if (typeof num === 'string') {
      console.log(num);
    }
  }
}

printOnlyStrings(arr);