// console.log("arguments", process.argv);
console.log("arguments that are only numbers that we need to add", process.argv.splice(2));

//first working
// let numbers = process.argv.splice(2);
console.log(numbers);

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   console.log(parseInt(numbers[i]));
//   sum+= parseInt(numbers[i]);
// }

// console.log(sum);

//clean up and edge cases

// const numbers = process.argv.splice(2);

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (Number.isInteger(parseInt(numbers[i]))) {
//     sum+= parseInt(numbers[i]);
//   }
// }

// console.log(sum);

// MORE REFACTOR

// const addNumbers = function (numberArray) {
//   let sum = 0;
//   for (let i = 0; i < numberArray.length; i++) {
//     if (Number.isInteger(parseInt(numberArray[i]))) {
//       sum+= parseInt(numberArray[i]);
//     }
//   }
//   return sum;
// }

// console.log(addNumbers( process.argv.splice(2)));

// EVEN MORE REFACTOR


// const addNumbers = function (numberArray) {
//   let sum = 0;
//   for (let number of numberArray) {
//     const parcedNum = parseInt(number);
//     if (Number.isInteger(parcedNum)) {
//       sum += parseInt(parcedNum);
//     }
//   }
//   return sum;
// }

// console.log(addNumbers(process.argv.splice(2)));


// BONUS --- LAST REFACTOR ( BUT IS THIS GOOD?? )


const addNumbers = function (numberArray) {
  return numberArray.reduce((acc, num) => Number.isInteger(parseInt(num)) ? parseInt(num) + parseInt(acc) : acc);
}

console.log(addNumbers(process.argv.splice(2)));