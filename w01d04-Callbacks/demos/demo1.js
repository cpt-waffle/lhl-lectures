// // create a program that prints an array backwards //

// const arr = [1,2,3,4,5]

// const printBackwards = function(arr) {
//   for (let i = arr.length -1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }

// printBackwards(arr);

// // create a program that prints an array backwards.
// //Each element should be printed with a prefix "the element is:"

// const printBackwards2 = function(arr) {
//   for (let i = arr.length -1; i >= 0; i--) {
//     console.log('the element is ',arr[i]);
//   }
// }

// printBackwards2(arr);


const arr = [1,2,3,4,5]

// const printElement = (element) => {
//   console.log('This is => ', element);
// }

const standardPrint = (element) =>{
  console.log(element);
}

const printBackwards = (arr, cb) => {
  for (let i = arr.length -1; i >= 0; i--) {
    cb(arr[i]);
  }
}

printBackwards(arr, (element) => {
  console.log('This is =>', element);
}));

printBackwards(arr, standardPrint);

