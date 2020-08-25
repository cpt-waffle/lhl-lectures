const higherOrderFunc = function(callback) {
    const data = { initials: "YV" };
  
    console.log('BEFORE TIMEOUT CALL');
    setTimeout(() => {// timeout is set 
      data.initials = "YAV";
      callback(42);
    }, 1000);
  
    console.log('AFTER TIMEOUT CALL');
}
  
console.log('BEFORE MAIN CALL');
const result = higherOrderFunc((result) => {
    console.log('INSIDE CALLBACK');
    console.log(result)
})
console.log('AFTER MAIN CALL');

// BEFORE MAIN CALL
// BEFORE TIMEOUT CALL
// AFTER TIMEOUT CALL             
// AFTER MAIN CALL
// INSIDE CALLBACK
// 42