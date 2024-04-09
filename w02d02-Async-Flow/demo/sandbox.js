// Review!

// Functions 

// a piece of code that can be re-ran at any time 


const xmasTree = function() {
  console.log("   *");
  console.log("  ***");
  console.log(" *****");
  console.log("********");
  console.log("   ||");
}

// parameters, arguments

// what is the limit of how many parameters a function can have ?
//                           parameter
// docs will tell you
const fancyGreetings = function(name,a,b,c,d,e,f,g,h,i,j,k,l) {
  if (!name) return console.log('error: name not provided!');
  console.log("Hello ", name, "!");
}

const banana = 'Vas'

//           argument
// fancyGreetings(banana);


// callbacks!!

//  What is a callback ??

const addTwo = function(num) {
  console.log(num, " + 2 = ", num + 2 );
}

// [2,3,4,5,6]
const addTwoToEverything = function(array, cb) {
  for (let num of array) {
    console.log(num);
    cb(num);
  }
}
//   ^ refactoring 
//   you may not have access to the source code.

//                   array, undefined
// addTwoToEverything([2,3,4,5,6], addTwo);


// a function that takes an array and a callback, that loops through the array,
// and does something to each value of the array


const myLoop = function(array) {
  for (let val of array) {
    print(val);
  }
}

const print = function(n) {
  console.log(n);
}



myLoop([1,2,3,4,5,6,7], print);