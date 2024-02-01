// Write a function called printOnly      
// where it takes an array and a callback   
// the callback will determine which elements to print

const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten']



const printOnly = function(array, callback) {
    console.log(callback);
    for (let value of array) {
      if (callback(value)) {  // <-----------
        console.log(value);
      }
    }
}


const isNumber = function(v) {
  if (typeof v === 'number') return true;

  return false;
}

//   annon function
printOnly(arr, () => true);

printOnly(arr, () => {
  return false;
});

printOnly(arr, isNumber);

printOnly([1,'a',2,'b','c',3,4,5], function(v) {
  return typeof v === "string";
});


