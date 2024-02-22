// review/examples

// callbacks 

const greetings = (callback) => {
  console.log('inside my greetings function');
  callback();
}

setTimeout(() => {
  console.log("I will run eventually!!!") 
}, 1000);


// async functions
// async functions don't return anything usually (null)
// async functions take in a callback to give you result in it
