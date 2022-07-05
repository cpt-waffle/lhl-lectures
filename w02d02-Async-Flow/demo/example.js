const higherOrderFunc = function(callback) {
  const data = { initials: "YV" };

  console.log('BEFORE TIMEOUT CALL');
  console.log(data);
  setTimeout(() => { // async 
    data.initials = "YAV";
    callback();
    console.log(data);
  });

  console.log('AFTER TIMEOUT CALL');
}

console.log('BEFORE MAIN CALL');
const result = higherOrderFunc(() => {
  console.log('INSIDE CALLBACK');
})
console.log('AFTER MAIN CALL');
// ALWAYS FOLLOW MAIN FIRST, THEN DEAL ASYNC FUNCTIONS AFTER


// BEFORE MAIN CALL
// BEFORE TIMEOUT CALL
// {initials "YV"}
// AFTER TIMEOUT CALL
// AFTER MAIN CALL
// INSIDE CALLBACK
// initials "YAV"
