// make a function that loops through the array
// and also takes a callback for the user to do anything with
// each value of the array..

const forEvery = (arr, cb) => {
    for (let val of arr) {
        cb(val);
    }
}

const arr = [1,'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];

let sumOfNumbers = 0;

forEvery(arr, (v) => {
    if (typeof v === 'number') {
        sumOfNumbers += v;
    }
})
// for let i of ..
// for let i in ..
// for let i = 0; i < arr.length; i++
arr.forEach((element, i ) => {
    console.log('current val:' ,element);
    console.log('current i:' , i);
})



// console.log(sumOfNumbers);

