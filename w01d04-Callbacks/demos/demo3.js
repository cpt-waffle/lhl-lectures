// Write a function called printOnly
// where it takes an array and a callback
// the callback will determine which elements to print

const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];

const printOnly = function(arr, callback) {
    console.log(callback);
    for (let item of arr) {
        callback(item);

        // console.log(item);
    }
}
const onlyNumberCheck = function(arg) {
    if (typeof arg === 'number') {
        console.log('line 16: argument is ->', arg);
    }
}

const onlyStringCheck = function(arg) {
    if (typeof arg === 'string') {
        console.log('line 23: argument is ->', arg);
    }   
}

printOnly(arr, function(arg) {
    if (typeof arg === 'number') {
        console.log('line 16: argument is ->', arg);
    }
});

printOnly(arr, function(arg) {
    if (typeof arg === 'string') {
        console.log('line 23: argument is ->', arg);
    }   
});

