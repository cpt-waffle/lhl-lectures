// review/examples

const hello = require('./promiseFunc');
// function that returns a promise
// that promise is pending ( being worked on) at the start

// when hello() finishes its work, the promise that was returned either will be "Done" () or "rejected"
//
hello().then((data) => {
  console.log("promise finished");
  console.log('data is', data);
  return 3.14
}).then((v1) => {
  console.log("promise2");
  console.log(v1);
  return "HELLO"
}).then((v2) => {
  console.log("promise3")
  console.log(v2)
}).catch(e => {
  console.log(":( something went wrong");
})
