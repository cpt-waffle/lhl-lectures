// Review!

// functions!
// its a block of code that you can re-use!
//                   parameters
const foo = function(num1, num2) {
  let sum = num1 + num2;
  console.log(`${num1} + ${num2} = ${sum}`);
  // return
  return sum;
}

// const returnValue = foo(3,2);
// console.log("RETURN VAL:", returnValue);

//callbacks!
// its a way to pass a function (as a param) into another function
const customGreetings = function(cb) {
  console.log("CB =", cb)
  cb(3,3)
}

let x = 4;
customGreetings(function(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`)
})