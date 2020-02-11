const map = (arr, cb) => {
  let result = [];
  for (let element of arr) {
    result.push(cb(element))
  }
  return result;
}

const multiTwo = (x) => {
  return x * 2;
}

// console.log(map([1,2,3,4,5,6,7,8], multiTwo));


// const adder = (number, cb) => {
//   let result = 0;
//   setTimeout(() => {
//     result = 20 + number;
//     cb(result);
//   }, 1500)
// }

// adder(5, (val) => {
//   console.log("We waited for this to comeback!!");
//   console.log('our value is ==>', val);
// });


slowPrint("This is my string");



























// async examples setInterval, setTimeout


// print example (maybe?)


// file read example (fs.readFile())

