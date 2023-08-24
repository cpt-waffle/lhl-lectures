// Write a function called printOnly      
// where it takes an array and a callback   
// the callback will determine which elements to print

const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten']

// high order function 
// is a function that takes in a callback
const printOnly = function(array, callback) {
  console.log(callback);
  for (let element of array) {
    if (callback(element)) {
      console.log(element);
    }
  }

}

const num = 5;

const isNumber = n => typeof n === 'number';

const isStr = (s) => {
  return typeof s === 'string';
}


// a callback is just a function that can be passed as a argument
printOnly(arr, (n) => {
  return typeof n === 'number';
});






// printOnly(['a', 'b', 'c', 4, 2, 1, 'd', 'e', false], isStr);