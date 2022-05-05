// // map // forEach // Filter // 

// c style for loop = index, arr[index]
// for of = only gets us the value
// for in = only gets us the index
// const array = ['purple', 'green', 'blue', 'salmon', 'firebrick', 'rebecca purple'];
// //                 0       1        2        3           4              5
// array.forEach((b, index, a) => {
//   console.log("what is B?? ", b);
//   console.log("what is index??/", index);
//   console.log(a);
// })

// const result = [];
// for (let num of numbers ) {
    // result.push(num * 5);
  // }
  
  // console.log(result);
  
  // map
  const numbers = [1,2,3,4,5];
const result = numbers.map((elem) => {
  return elem * 5;
})

console.log(result);
