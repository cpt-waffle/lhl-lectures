// I want to take node arguments
// ( they have to be numbers )
// and then I want to add each number and return the sum
// I want to ignore anything thats not a whole number

// take node arguments (WELL WHAT IS THAT???!?!)
// how do i check if number??
// might use an array?
// use a loop
// how to check if its a whole number???

let arr = process.argv.slice(2);
console.log('arr => ', arr);

let sum = 0;

for (let number in arr) {
  sum = sum + Number(arr[number]);
}

console.log(sum);

// console.log(process.argv)