// const a = 'foo'; // <--------- value;
// //    ^variable name

// const fun = function(a,b,c,d,e) {
//     console.log("foo!!!");
//     console.log(a,b,c,d);
// }

// fun(1,2, a);
// ////////////////////////////////////////

// // callbacks!!!

// const highOrder = function(name, cb) {
//     console.log("Name is :", name);
//     console.log('cb is ',cb); // <--- by reference
//     cb(22,33,44);
// }

// highOrder('Vas', fun)

const arr = [1,2,3,4,5];

// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0)
//         newArr.push(arr[i]);
//         newArr.push(cb(arr[i]))
// }
console.log(arr);
const fileterdArray = arr.filter((element) => {
    return element % 2 === 0
})
console.log(fileterdArray);

const multipleThree = arr.map((element) => {
    return element * 3;
})
console.log(multipleThree)



// for (let val of arr) {  // let index in array

// }

// arr.forEach((val, index, ) => {

// })



// forEach
// map
// filter
// reduce <--- 