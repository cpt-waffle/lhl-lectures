// I want to take node arguments
// ( they have to be numbers )
// and then I want to add each number and return the sum
// I want to ignore anything thats not a whole number

// take node arguments (WELL WHAT IS THAT???!?!)
// how do i check if number??
// might use an array?
// use a loop
// how to check if its a whole number???

let arr_one = process.argv.slice(2);

// This function takes an array and sums the contents of it
const sumArray = function(arr) {
  let sum = 0;
  for (let number of arr) {

    // checks if the number is a whole
    if (Number(number) % 1 === 0) {
      sum += Number(number);
    }
  }
  return sum;
}

// DO NOT DO THIS!!! THIS IS TOO MUCH TO REFACTOR AFTER OR EDIT !!!!!!! BAAAAAAAAAAAAAAAAAD!!!!
// const sumArray = arr => arr.map(e => Number(e)).reduce((total, num) => Number(num) % 1 === 0 ? total += Number(num) : total += 0);




let sum = sumArray(arr_one);

console.log(sum);







// console.log(process.argv)