// Review from yesterday!!


const arr = [1,2,3,4,5];
// index     0 1 2 3 4 
const obj = {a:1, b:2, c:3};
//  keys     a    b    c


// c style for loop <--- arrays
for (let i =0; i < arr.length-1; i++) {
  console.log(arr[i]);
}
// for in loop <------ arrays , objects
for (let i in arr) {
  console.log(arr[i]);
}

for (let k in obj) {
  console.log(obj[k])
}

/// for in loop <------- arrays

for (let v of arr) {
  console.log(v);
}