// make a function that takes in an array and a callback
// the callback will determine if a number is odd or even
// if the number is even add in it into an array
// and return an array of even numbers

const even = (arr, cb) => {
  let result = [];
  arr.forEach((element) => {
    if (cb(element)) {
      console.log('pushing element ', element);
      result.push(element);
    }
    console.log(element);
  })
  return result;
}

console.log(even([1,2,3,4,5,6,7,8,9,22], (e) => {
  return e % 2 === 0;
}));