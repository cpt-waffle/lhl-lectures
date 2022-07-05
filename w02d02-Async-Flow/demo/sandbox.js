// Review!!!!!

const PI = 3.14;
let fruit = 'banana';

// Functions

// es5 functions
const greetings = function() {
  console.log(this);
  return 3;
  //...
}

// es6 function
const greetings2 = () => 3;

const greetings3 = () => {
  console.log(this);
  return 3;
};

// greetings();
// greetings3();

////////////////////////////////////////////////


// CALLBACKS !!!!!!!!!~~~~~~~~

// using a function in another function
// function A was PASSED as a parameter in function B

const customMessage = (cb) => {
  console.log(cb);
  console.log("-------------------");
  cb();
  console.log("-------------------");
}


customMessage(() => {
  console.log("Welcome to W2D2 Async Functions!");
})