// // map // forEach // Filter // reduce

const array = [1,2,3,4,5,6,7,8,9,10];
// for of, for in
// array.forEach((element, index, array) => {
//   console.log("we are not looping through element ", element, " at index=", index);
// })

const result = array.map((element, index) => {
  console.log(element);
  // .push(??)
  return element * 5;
})

console.log(result);