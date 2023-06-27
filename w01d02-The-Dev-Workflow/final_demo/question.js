// We are tasked to create a program that takes 
// in any number of command line arguments
// which will be numbers, and adds them toghether 
// in and returns a sum of all the numbers.


// the overall breakdown
// - "if i can do X then i can do Y"
const formattedArray = process.argv.slice(2); 


const addNumbers = function(arr) {
  let result2 = 0;
  // we should split process.argv removing the first elements and making it into an array numbers 


  for (let i = 0; i < arr.length; i++) {
    result2 = result2 +  Number(arr[i]);
  }
  
  return result2;
}

// console.log(addNumbers(formattedArray));

// BAD SOLUTION 
// coding golf
// constAddNumbers2 = arr => arr.map(n => Number(n)).reduce( (acc, curr) => acc + curr, 0);

// console.log(constAddNumbers2(formattedArray));



