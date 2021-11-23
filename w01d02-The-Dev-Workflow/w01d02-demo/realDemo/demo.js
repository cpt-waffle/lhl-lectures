// We are tasked to create a program that takes 
// in any number of command line arguments
// which will be numbers, and adds them toghether 
// in and returns a sum of all the numbers.


const sum = function(arr) {
    let result = 0;

    for (let element of arr) {
        result += Number(element);
    }
    return result;
}

const arr = process.argv.slice(2);
const result = sum(arr);
console.log(`The sum is: ${result}`);
