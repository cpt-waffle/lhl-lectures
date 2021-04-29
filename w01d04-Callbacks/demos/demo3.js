// Write a function called printOnly
// where it takes an array and a callback
// the callback will determine which elements to print
const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];

const printOnly = function(arr, callback) {
    for (let number of arr) {
        if (callback(number)) {
            console.log(number);
        }
    }
}
// arrow functions 
// its just syntax ( and also scope )
// one liner functions are easier to write 

                // can a callback return values? can i catch em in a variable?
printOnly(arr, (arg) => {
    if (typeof arg === 'number') {
        return true;
    } else {
        return false;
    }
});

printOnly(arr, (arg) => typeof arg === 'string');
