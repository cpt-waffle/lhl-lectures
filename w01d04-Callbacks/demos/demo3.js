// Write a function called printOnly
// where it takes an array and a callback
// the callback will determine which elements to print

const printOnly = function(arr, callback) {
    for (let elem of arr) {
        if (callback(elem)) {
            console.log(elem)
        }
    }
}

const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];
const onlyNumberCheck = function(arg) {
    const value = typeof arg; // number or string
    return value === 'number';
}
// console.log(onlyNumberCheck('fifty-six'));

printOnly(arr, onlyNumberCheck);

printOnly(arr, function(arg) {
    return typeof arg === 'string';
})