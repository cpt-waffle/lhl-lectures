// review/examples

const hello = require('./promiseFunc');


console.log(hello);

hello(1).then(greetings => {
  console.log("we got back value");
  console.log(greetings);
}).catch(e => {
  console.log("error has occured", e);
});
