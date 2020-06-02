const higherOrderFunc = function(callback) {
  const data = { initials: "YV" };
  console.log('BEFORE TIMEOUT CALL');

  // setTimeout(() => {
  //   data.initials = "YAV";
  //   callback();
  //   return 3;
  // }, 1000);


  console.log('AFTER TIMEOUT CALL');
  return 3.14;


}
console.log('BEFORE MAIN CALL');
const result = higherOrderFunc(() => {
  console.log('INSIDE CALLBACK');
})
console.log('AFTER MAIN CALL');
console.log(result);

// Our Output
// BEFORE MAIN CALL
// BEFORE TIMEOUT CALL
// AFTER TIMEOUT CALL
// AFTER MAIN CALL
// undefined
// INSIDE CALLBACK


// AFTER MAIN CALL
// AFTER TIMEOUT CALL
// undefined
// INSIDE CALLBACK