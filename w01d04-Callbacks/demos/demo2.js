// write a function that takes an array as an argument.
// then it prints out ONLY numbers from this array.
const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];
//           0   1    2    3     4    5    6    7      8    9
const printNumbers = function(arr) {
  // for loop
  // for in  -- works on ARRAYS AND OBJECTS
  // for of  -- works on ARRAYS ONLY!!!!!!
  //   for (let i = 0; i <= arr.length - 1; i++)
  for (let i of arr) {
    if (typeof i === 'number') {
      console.log(i)
    }
  }
}

printNumbers(arr);




// write a function that takes an array as an argument.
// then it prints out ONLY strings from this array.
// two, four, six, eight, ten


const printStrings = function(arr) {
  for (let i of arr) {
    if (typeof i === 'string') {
      console.log(i)
    }
  }
}

printStrings(arr);