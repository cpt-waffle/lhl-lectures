// write a function that takes an array as an argument.
// then it prints out ONLY numbers from this array.
// 1,3,5,7,9
const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];

const printOnlyNumbers = function(arr) {
  // for (let i = 0; i < arr.length; i++) arr[i]
  // loop through array...
  console.log(" --- Only Numbers ---")
  for (let val of arr) {
      if (typeof val === 'number') {
        // if number then print number
        console.log(val);
    }
    // if not then dont
  }
}

printOnlyNumbers(arr);

// write a function that takes an array as an argument.
// then it prints out ONLY strings from this array.
// two, four, six, eight, ten

// const printOnlyStrings = function() { .... }
const printOnlyStrings = (arr) => {
  console.log('--- Only Stings ---')
  for (let val of arr) {
    if (typeof val === 'string') {
      console.log(val);
    }
  }
}

printOnlyStrings(arr);