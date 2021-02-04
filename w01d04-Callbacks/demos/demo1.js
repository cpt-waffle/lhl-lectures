

// WHat is a function? Why even use functions? Whats the point?
// DRY 
// Groups a bunch of code
// packs functionality
// performs one specific task

// can be stored in a variable

// variable declarations
// left side is variable name
let fruit = 'apple'; // right side is value
let number = 1;

// this is a variable  
const prettyFruitPrint = function(f, n) { // a function
    console.log('-------------------');
    console.log('fruit: ', f, '     number: ', n);
    console.log('-------------------');
}



// declaration function
const numFruit = function(fruitName, numOfFruits, func) { // value happens to be a function...
    console.log(func);
    func(fruitName, numOfFruits);
}


numFruit('banana', 99, function(a,b) {
    console.log("not a very pretty print....");
    console.log(a,b);
})

numFruit(fruit, number, prettyFruitPrint); // < this is also fine



// call notation with the ()

// passing a function INTO another function as parameter === CALLBACK


// numFruit('banana', 99); // < this is fine

// const notPrettyPrint =  function(a,b) {
//     console.log("not a very pretty print....");
//     console.log(a,b);
// }


// WHY THE HELL IS THIS POSSIBLE

// - DRY - cleaner code 
// - maximum reusability





// - async 

