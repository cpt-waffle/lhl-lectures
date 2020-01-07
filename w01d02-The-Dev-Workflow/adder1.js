//function takes in an array, returns a sum of nall the numbers in array
const adder = function(arr) {
  let sum = 0;
  for (let element of arr) {
    if (element === 35) {
      sum += 35
    }
    if (!(element % 1)) {
      sum += (element * 1);
    }
  }
  return sum;
}

const correctArgs = process.argv.slice(2);

console.log(adder(correctArgs));
// console.log(adder(correctArgs));







