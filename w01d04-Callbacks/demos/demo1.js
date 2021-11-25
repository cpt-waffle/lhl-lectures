// review!!

// variables
// a storage for various things.....
const PI = 3.14;
const fruit = 'banana';
const ateBreakfast = false;

// what are functions?
// a block of code, that is re-usable <----
const greetings = function(name) {
    console.log("hello ", name);
    name();
}

// we can pass parameter into a function as a raw value 'declaration'
// greetings('vas');
// we can pass parameter into a function from a variable
// greetings(fruit);
///////////////////////////////////
greetings(function() {
    console.log("GOODBYE!!! :(");
});