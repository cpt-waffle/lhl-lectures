// make a function that loops through the array
// and also takes a callback for the user to do anything with
// each value of the array.

const bestLoop = (arr, cb) => {
  for (let elem of arr) {
    cb(elem);
  }
}

const arr = [1,2,3,4,5,6,7,8,9,10];
const result = [];

bestLoop(arr, (e) => {
  if (e % 2 === 0) {
    result.push(e);
  }
})

console.log(result);