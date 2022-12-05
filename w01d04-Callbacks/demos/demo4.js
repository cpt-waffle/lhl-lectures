// make a function that loops through the array
// and also takes a callback for the user to do anything with
// each value of the array.

// const bestLoop = function () { ... }

const bestLoop = (array, cb) => {
  for (let val of array) {
    cb(val)
  }
}


const multiTwo = [];

const addToArray = function(val) {
  multiTwo.push(val * 2);
}


bestLoop([1,2,3,4], (val) => {
  multiTwo.push(val * 2);
})

console.log(multiTwo);

bestLoop([1,2,3,4], val => {
  console.log("value is", val);
})