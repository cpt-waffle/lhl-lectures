// Write a function called printOnly
// where it takes an array and a callback
// the callback will determine which elements to print
const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];

const printOnly = function(array, callback) {
    console.log(callback);
    for (let val of array) {
        if (callback(val)) {
            console.log(val);
        }
    }
}



const checkIfString = function(val) {
    if (typeof val === 'string') {
        return true
    } 
    return false;

}
// console.log(checkIfNumber('five'));

printOnly(arr, function(val) {
    return typeof val === 'number'
});

printOnly(arr, checkIfString);
