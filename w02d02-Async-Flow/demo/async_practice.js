const higherOrderFunc = function(callback) {
    const data = { initials: "YV" };
  
    console.log('BEFORE TIMEOUT CALL');
    setTimeout(() => {
      data.initials = "YAV";
      console.log(data);
      callback(data);

    }, 1000);
  
    console.log('AFTER TIMEOUT CALL');
    return data;
}
  
console.log('BEFORE MAIN CALL');
const result = higherOrderFunc((data) => {
    console.log('INSIDE CALLBACK');
    console.log(data);
})
console.log(result);
console.log('AFTER MAIN CALL');

// BEFORE MAIN CALL
// BEFORE TIMEOUT CALL
// AFTER TIMEOUT CALL
// AFTER MAIN CALL
// INSIDE CALLBACK
