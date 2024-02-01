// // map // forEach // Filter // reduce


const array = [1,2,3,4,5,6,7,8,9,10];


const result = array.map((elem, i, arr) => {
  // console.log(elem);
  // console.log(i);
  return elem * 5;
})

// console.log(result)

console.log('forEach')
array.forEach((elem, i, arr) => {
  // console.log(elem);
})

// console.log('filter');


const result2 = array.filter((elem, i) => elem % 2 === 0);


// console.log(result2);

const result3 = array.reduce((acc, curr) => {
  console.log('curr -->', curr);
  console.log('acc -->', acc);
  return curr + acc;
});
