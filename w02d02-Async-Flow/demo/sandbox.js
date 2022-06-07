// const foo = function() {
//   console.log("Hello World!");
//   throw new Error('SOMETHING IS ON FIRE!!!!')
// }

// foo();

// review

const PI = 3.14;

const greetings = function(name) {
  console.log("hello world!"); 
}

// high order function
const customGreetings = (cb) => {
                        //^ callback function
  console.log("Custom Hello!");
  cb();
}
// modularity
// cleaner code
// re-usability

customGreetings(greetings);

//////////////// Real world Example of callbacks

const array = [1,2,3,4,5,6,7,8,9,10];

/// for (let num of array )

const result = array.map((num) => {
  return num * 2;
})
console.log(result);

const resultArray = [];
array.forEach((num) => {
  resultArray.push(num * 2);
})

console.log(resultArray);


