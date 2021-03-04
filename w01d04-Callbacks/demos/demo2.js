// write a function that takes an array as an argument.
// then it prints out ONLY numbers from this array.
// 1,3,5,7,9
const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];

const printOnlyNumbers = function(arr) {
  // we have an array
  // we loop through array
  for (let item of arr) {
    // we check if the item we loop through is a number
    if (typeof item === 'number') {
      // if it is a number ---> print
      console.log(item);
    }
  }
}

console.log(printOnlyNumbers(arr));

// write a function that takes an array as an argument.
// then it prints out ONLY strings from this array.
// two, four, six, eight, ten

// const printOnlyStrings = function() { .... }
const printOnlyStrings = (arr) => {
  for (let item of arr) {
    if (typeof item === 'string') {
      console.log(item);
    }
  }
}

console.log(printOnlyStrings(arr));