// Write a function called printOnly      X
// where it takes an array and a callback X  
// the callback will determine which elements to print

const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];


const printOnly = function(array, cb) {
  for (let val of array) {
    if (cb(val)) {  // what does cb(val) return ?
      console.log(val);
    }
    
  }
}

// arrow notation syntax 

// const alwaysTrue = function() {...}
// anon functions --> functions that have no name...
const alwaysTrue = () => {
  return true;
}



const alwaysFalse = () => false;


const checkIfNumber = val => {
  if (typeof val === 'number') {
    return true;
  } else {
    return false;
  }
}

printOnly(arr, alwaysTrue);
console.log('----------');
printOnly(arr, () => false);
console.log('----------');
printOnly(arr, checkIfNumber);

