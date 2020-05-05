const higherOrderFunc = function(callback) {
  const data = { initials: "YV" };
  console.log('BEFORE TIMEOUT CALL');
  setTimeout(() => {
    data.initials = "YAV";
    callback();
    return 3;
  });
  console.log('AFTER TIMEOUT CALL');
}
console.log('BEFORE MAIN CALL');
const result = higherOrderFunc(() => {
  console.log('INSIDE CALLBACK');
})
console.log('AFTER MAIN CALL');
console.log(result);

