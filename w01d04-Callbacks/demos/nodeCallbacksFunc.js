// // map // forEach // Filter // reduce

const array = [23, 54, 85, 11, 21, 0];

array.forEach((element, index, arr) => {
  // console.log(element);
  // console.log(index);
  // console.log(arr);
})

// Map
const newArray = array.map(element => element + 10);

// console.log(newArray);


const filteredArray = array.filter(element => element < 50);

console.log(filteredArray);

const result = array.reduce((accumilator, currValue) => {
  console.log("acc ->", accumilator);
  console.log("currVal ->",currValue);
  return accumilator + currValue
}, 0)

console.log(result);