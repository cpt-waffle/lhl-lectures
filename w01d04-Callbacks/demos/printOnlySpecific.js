// write a function that takes an array as an argument.
// then it prints out ONLY numbers from this array.
const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];
//           0,  1    2    3     4 

const printOnlyNumbers = function(array) {

  for (let element of array) {
    if (typeof element === 'number') {
      console.log(element);
    }
  } 
}

printOnlyNumbers(arr);



// write a function that takes an array as an argument.
// then it prints out ONLY strings from this array.

const printOnlyStrings = function(array) {

  for (let element of array) {
    if (typeof element === 'string') {
      console.log(element);
    }
  } 
}

printOnlyStrings(arr);
