// Write a function called printOnly X     
// where it takes an array and a callback  X
// the callback will determine which elements to print

const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];
//           0   1    2    3     4    5    6    7      8    9

const isNumber = function(val) {
  if (typeof val === 'number') {
    return true;
  } else {
    return false;
  } 
}
// ['Alice', 'Ray', 'Prince', 'Waldo', 'Courtney']


const printOnly = function(arr, callback) {
  for (let element of arr) {
    // if true PRINT , if false DONT PRINT
    if (callback(element) === true)
      console.log(element);
  }
}

// printOnly(arr, cb)

// console.log(isNumber('three'));

// arrow notation functions 


printOnly(arr, isNumber)
printOnly(arr, (val) => {
  return typeof val === 'string' ? true : false;
})
