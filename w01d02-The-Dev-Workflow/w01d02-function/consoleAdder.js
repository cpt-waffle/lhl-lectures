// We are tasked to create a program that takes in any number of command line arguments
// which will be numbers, and adds them toghther in and returns a sum.
// WHEN should i commit?

console.log("Command Line Arguments!");

const sumArray = function(numbersArr) {
    let sum = 0;
    for (let value of numbersArr) {
        // i is the index of the number in the array when using for (let i in numbersArr)
        // i is the value of the current loop when using for (let i of numbersArr)
        let parsedValue = parseInt(value)
        if (parsedValue) {
            sum += parsedValue;
        }
    }
    return sum;
}

// numbers is an array
const numbers = process.argv.slice(2);
console.log(numbers);
const answer = sumArray(numbers);
console.log("result: ", answer);

