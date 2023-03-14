// Review!

// Functions

  // -- params, arguments
  // -- returns

  // ----------------      params
const greetings = function(a,b,c) {
  console.log("Hello World!");
  return 3.14;
}


// const result = greetings(1,'two', false) // <----- arguments
// console.log(result);


// Callbacks  <------- ??
// 

const highOrderFunction = function(a,b,callback) {
  console.log(a);
  console.log(b);
  console.log(callback());

}

const value = 2;

highOrderFunction(1,value, greetings);