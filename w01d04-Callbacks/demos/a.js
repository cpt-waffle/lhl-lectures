// Make a function that takes in an array, and a callback function
// if callback function returns true on a specific value in the array
// print that variable, otherwise, print Not a Numer


const printNumbers = (arr, cb) => {
  console.log(arr, cb);
  for (let i of arr) {
    if (cb(i)) {
      console.log(i);
    } else {
      console.log('Not A Number ===>', i);
    }
  }
}
printNumbers([1,'2',3,'four',5], (val) => typeof val === 'number' ? true : false);