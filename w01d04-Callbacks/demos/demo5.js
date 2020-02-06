const arr = [1,2,3,4,5,6,7,8,9,10];

const prettyPrint = function(val) {
  console.log("***The value is ", val, "***");
}

const uglyPrint = function(val) {
  console.log("ThE VAluE IZ", val, "^**^^*W$85uw");
}

 ///////////////////////// SOME SORT OF FUNCTION THAT SOMEONE IS PASSING
function printNumbers(arr, callback) {
  for (let i of arr) {
    callback(i);
  }
}

const printWithArrow = function(val) {
  console.log('the Value is ===>', val);
}



printNumbers([1,2,3,4,5,6,7,8], (val) => {
  console.log('the Value is ===>', val);
});




// function printNumbersWithPrefix(arr) {
//   for (let i of arr) {
//     console.log("The number is ", i);
//   }
// }

function printOnlyEven(arr) {
  for (let i of arr) {
    if (i % 2 === 0)
    console.log(i);
  }
}



// printOnlyEven([1,2,3,4,5,6,7,8,9,10]);