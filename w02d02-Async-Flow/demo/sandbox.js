// Review!

// functions!
                     // params
                     // no limit to how many parameters go into a function
const greetings = function(name) {
  console.log("Hello ", name);
}
          // argument
// greetings('Charlie');

//////////// callbacks!

// a parameter that happens to be a function

const foo = function(callback) {
  console.log(callback);
  callback('Vas');
}

greetings('Test')

foo(function() {
  console.log("annon function!");
});

// forEach, map, filter, 