// make a function that loops through the array
// and also takes a callback to do anything we want with every element of the array

// const bestLoop = function () { ... }


const bestLoop = (arr, cb) => {
  for (let index in arr) {
    cb(arr[index], index);
  }
}


bestLoop([1,2,3,4,5,6,7,8,9,10], num => console.log(num));

let result = 0;
bestLoop([1,2,3,4,5,6,7,8,9,10], num => {
  result = result + num;
})
console.log(result);

bestLoop([1,2,3,4,5,6,7,8,9,10], (num, i) => {
  console.log(" value is: ", num);
  console.log(" index is: ", i);
  console.log("-----------");
})

const evenIndex = [];

bestLoop([1,2,3,4,5,6,7,8,9,10], (num, i) => {
  if (num % 2 === 0) {
    evenIndex.push(i);
  }
})
console.log(evenIndex);