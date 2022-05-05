// REVIEW!!!!!

// variables are there to store data
const PI = 3.14; // number
let fruit = 'apple'; // string
const ateBreakfest = false; // boolean

// Functions?
// execute an action (multiple times)

// function definition!
const greetings = function(nameOfDay, isNight, func) {
  console.log(func());
  func();
  if (isNight === true) {
    console.log('Happy ' + nameOfDay + ' evening!');
  } else {
    console.log("Happy ", nameOfDay);
  }
  return 'hello'
}
// return type!
const somePrintFunction = function() {
  console.log("LINE 24: I AM PRINTING!!!!");
  console.log("LINE 25: FUNCTION END");
}

// call the function 
const response = 'almost FridaY!!!!!';
const bb = true;
greetings('almost FridaY!!!!!', true, somePrintFunction);
// console.log("FUNCTION RETURNED ==", returnType);

// console.log(PI, fruit);