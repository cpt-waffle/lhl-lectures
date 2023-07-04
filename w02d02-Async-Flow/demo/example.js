const higherOrderFunc = function(callback) {
  const data = { initials: "YV" };

  console.log('BEFORE TIMEOUT CALL');
  // async function
  setTimeout(() => {
    data.initials = "YAV";
    callback();
  });

  console.log('AFTER TIMEOUT CALL');
}

console.log('BEFORE MAIN CALL');
const result = higherOrderFunc(() => {
  console.log('INSIDE CALLBACK');
})
console.log('AFTER MAIN CALL');


// BEFORE MAIN CALL
// BEFORE TIMEOUT CALL
// AFTER TIMEOUT CALL
// AFTER MAIN CALL
// INSIDE CALLBACK

