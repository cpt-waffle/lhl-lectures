// // map // forEach // Filter // reduce

const array = [1,2,3,4,5]
//   output => 2,4,6,8,10

const arr = [];
for (let num of array) {
  arr.push(num * 2)
}

console.log(arr);


const result = array.map((element, index, array) => {
  return element * 2;
})
console.log(result);


array.forEach(function(element, index) {
  console.log('element', element);
  console.log('index', index);
})