// Write a function called printOnly X     
// where it takes an array and a callback  X
// the callback will determine which elements to print

const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];


const isNumber = (val) => {
  return typeof val === 'number';
}


const printOnly = function(array, callback) {
  console.log(callback);
  for (let num of array) {
    if (callback(num)) {
      console.log(num);
    }
  }
}


printOnly(arr, isNumber);


printOnly([1, 'two', 3, 'four'], function(val) {
  return typeof val === 'string'
})