// We are tasked to create a program that takes 
// in any number of command line arguments
// which will be numbers, and adds them toghether 
// in and returns a sum of all the numbers.


const consoleAdder = function(arr) {
    let result = 0;
    // C style for loops are out of style.... especially in js front-end work
    // for of or for in...
    for (let val of arr) { // in <---- index // of <------ val 
        result += Number(val); // value of each element that we are looping through;
    }

    return result;
}

//process.argv  argv <--- is an array of command line arguments
const slicedArray = process.argv.slice(2);

const answer = consoleAdder(slicedArray);
console.assert(answer === 153, 'SOMETHING IS WRONG!!!');
console.log(`${slicedArray} sum is = `, answer);