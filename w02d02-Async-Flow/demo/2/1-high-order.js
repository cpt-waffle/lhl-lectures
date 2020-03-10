const higherOrderFunc = function(callback) {
  const data = { initials: "YV" };
  //2 BEFORE TIMEOUT CALL
  console.log('BEFORE TIMEOUT CALL');
  // ^ might run before timeout
  setTimeout(() => {
    data.initials = "YAV";
    callback();
    return 3;
  });
  console.log('AFTER TIMEOUT CALL');
}
// 1 BEFORE MAIN CALL
console.log('BEFORE MAIN CALL');
const result = higherOrderFunc(() => {
  // 4
  console.log('INSIDE CALLBACK');
})
// 2 AFTER MAN CALL
console.log('AFTER MAIN CALL');
console.log(result);

