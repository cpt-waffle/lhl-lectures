// write a function that takes an array as an argument.
// then it prints out ONLY numbers from this array.
const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];

// make a function
// the function will take in the parameter
const printNumbers = function(array) {
  // loop thorugh the array passed in
  for (let value of array) {
    // if the current element is a number we print
    if (typeof value === 'number') {
      console.log(value);
    }
    // if not number we skip
  }
}

// for (let i = 0; i < array.length - 1; i++);
// for (let index in array)  -----> loops through only the index
// for (let value of array)  ----> the values of the array




printNumbers(arr);



// write a function that takes an array as an argument.
// then it prints out ONLY strings from this array.

// make a function
// the function will take in the parameter
const printStrings = function(array) {
  // loop thorugh the array passed in
  for (let value of array) {
    // if the current element is a number we print
    if (typeof value === 'string') {   //   <-----------
      console.log(value);
    }
    // if not number we skip
  }
}

printStrings(arr);