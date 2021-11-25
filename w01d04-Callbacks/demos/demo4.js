// make a function that loops through the array
// and also takes a callback for the user to do anything with
// each value of the array.
// for (let i = 0; i < arr.length; i++)

// have you made loop
//  pushed
// recorded
// added to an object
// console.logged

const generalLoop = function(arr, callback) {
    for (let i in arr) {
        callback(arr[i], i);
    }
}

generalLoop([1,2,3,4,5], function(val, index) {
    console.log("val is", val);
    console.log('index is', index);
})
