// make a function that loops through the array
// and also takes a callback for the user to do anything with
// each value of the array..
// for (let i = 0; i < arr.length; i++)
const array = [1,2,3,4,6,7,8,9,10];

const ourLoop = function(arr, callback) {
    for (let index in arr) {
        callback(arr[index], index);
    }
}


ourLoop(array, (elem, i) => {
    console.log("this is my element ", elem);
    console.log("this is the index ",i);
})