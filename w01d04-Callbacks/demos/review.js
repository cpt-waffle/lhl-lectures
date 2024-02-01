// review

// Variable
// to store some data or information or an adress 

let fruit = 'apple';
const PI = 3.14;
fruit = 'banana'

// console.log(fruit, PI);


const numbers = [1,2,3,4,5,6];
//             0 1 2 3 4 

numbers.push(7);
// numbers = [1,2,3]; // error;

const wins = {alice: 3, bob: 0, david: 4};
//           alice       bob     david

// console.log(numbers);

///// Functions are sort of assigned to variables

// function definition
// arguments and 
// parameters --- inside function definition, that the function will take is called a parameter

// documentation to say which parameters are required
// we need a and b but C is option
// TS

// arrow function notation
const sum2 = (a,b,c) => {

}


const sum = (a,b,c) => {
  console.log("----------------------");
  console.log(a + b + c);
  console.log("----------------------");

  // return 3;
}

// argument --- passing the values 
// sum();



// callbacks 
// are just function parameters that happen to be other functions
const printEverythingWeTakeIn = function(param1, param2) {
  console.log(param1);
  sum(3,2,1);
  console.log(param2(3,2,1));
}


const fruit2 = 'apple';

// printEverythingWeTakeIn('a', fruit2);
printEverythingWeTakeIn('a', sum); // <<--- wierd
