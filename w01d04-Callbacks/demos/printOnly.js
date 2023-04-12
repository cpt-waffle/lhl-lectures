// Write a function called printOnly      
// where it takes an array and a callback   
// the callback will determine which elements to print

const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten']
//                                cb ==> true/false
const printOnly = function(array, cb) {
  console.log(cb);
  // 1
  for (let element of array) {
    if (cb(element)) {
      console.log(element);
    }
  }

}
// ES5 
// const _____ = function(...) { .... }
// ES6
// const _____ = ( ... ) => { ... }
// arrow function notation
// -- less code to write 
// -- if you have a 1 line of code, and its a return, you do not need to write { } or the return word itself. ES6 function will auto return if the function is 1 liner
const isAlwaysTrue = (v) => true;


const isAlwaysFalse = (v) => {
  return false;
}

const isNumber = (v) => {
 return (typeof v === 'number');
}

printOnly(arr, (v) => true);

printOnly(arr, (v) => {
  return false;
});

printOnly(arr,  (v) => {
  return (typeof v === 'number');
});