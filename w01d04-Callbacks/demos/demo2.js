

// const result = numbers.map((element) => {
//   console.log(element);
//   return 'hi';
// })


const numbers = [1,2,3,4,5,6,7,8,9];
const map = (arr, callback) => {
  let result = [];
  for (let element of arr) {
    // console.log('the element is =>', element);
    // console.log('element after we run the callback on it => ', callback(element));
    // console.log("PUSHING INTO NEW ARRAY")
    result.push(callback(element));
    console.log(result)
  }
  return result;
}

const result2 = map(numbers, (element) => {
  return element * 3;
})

console.log(result2);