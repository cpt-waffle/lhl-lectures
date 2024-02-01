// make a function that loops through the array
// and also takes a callback to do anything we want with every element of the array



// make a function called best loop, 2 arguments (array and cb)

const bestLoop = (array, cb) => {
  for (let value of array) {
    // every element needs to be called with callback so that the end user decides what to do with 
    cb(value);
  }
}

const array = [1,2,3,4,5,6,7,8,9,10];

const arr2 = [];

bestLoop(array, (value) => {
  console.log(value * 3);
  if (value % 2)
    arr2.push(value);
})

console.log(arr2);
// element