// console.log("test");
// review
// variables

let fruit = 'banana';
const PI = 3.14;


// console.log(fruit);
fruit = 'apple';
// console.log(fruit);

// functions
// -- an action
// -- a tool that turns input and gives back output
// -- reusable block code

// function declaration
// parameters and arguments ----
// parameters --
const greetings = function(a) {
  console.log("HELLO, ", a);
  // -- when the return is ran, anything bellow it will not execute.
  // -- return can only return 1 thing ( 1 value )
  return [2,3];
}

// function return type
// arguments --------- data that we are sending into the function
const name = 'Mathiew';

// const a = greetings('Vasiliy');
// greetings('Meg');
// greetings('Eddie');
// greetings(name);

// console.log(a);
// this is a variable ?

const solveQuestion = function(a, b) {
  const result = a + b;
  console.log('Solution:', result);
}
 //                                  c --- callback ( function )
const printQuestion = function(a, b, c) {
  console.log(c);
  console.log("--- Question ----");
  console.log(a, " + ", b, " = ");
  c(a,b);
}

const val1 = 2;
const val2 = 2;

printQuestion(2, 2, solveQuestion);

