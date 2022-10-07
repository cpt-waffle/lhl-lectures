// We are tasked to create a program that takes 
// in any number of command line arguments
// which will be numbers, and adds them toghether 
// in and returns a sum of all the numbers.

// node addNumbers 1 2 3 4 5
// 15 
const array = process.argv.splice(2);

const addNumbers = function(banana) {
  let sum = 0;
  // for (let i = 0; i < array.length; i++)
  // for (let i in banana) loops through INDEX of arrray
  // [44,55,33,22,11] i = 0, 1, 3 , 4 ,5
  //  0   1  2  3  4

  // [44,55,33,22,11] i = 44, 55, 33, 22,
  for (let val of banana) {
    // gotta convert to a number
    sum += Number(val);
  }

  console.log("THE VALUE IS :) ", sum);
}

addNumbers(array);


