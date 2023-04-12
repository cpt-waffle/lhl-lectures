// make a function that loops through the array
// and also takes a callback to do anything we want with every element of the array

// const bestLoop = function () { ... }


const bestLoop = (arr, cb) => {
  for (let elem of arr) {
    cb(elem);
  }
}

const numbers = [1,2,3,4,5,6,7,8,9];

const result = [];

bestLoop(numbers, (e) => {
  console.log(e * 2);
  result.push(e * 2);
})

console.log(result);