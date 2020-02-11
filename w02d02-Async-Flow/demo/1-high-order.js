
// 0) function declaration (doesn't effect anything)
const higherOrderFunc = function(callback) {
  // 4 we are now running highOrderFunc because of line 20
  const data = { initials: "YV" };
  // 5 console.log BEFORE TIMEOUT CALL executes
  console.log('BEFORE TIMEOUT CALL');
  // 6 Timeout is SET, but since it will take a bit, were going to
  // next line after....
  setTimeout(() => {
    // the call back of set timeout
    data.initials = "YAV";
    // 12 run callback from highOrderFunction() that was passed in....
    callback();
  }, 2000);
  // 7 AFTER TIMEOUT CALL runs
  console.log('AFTER TIMEOUT CALL');
  // 8 function finishes, goes back to where it was called..... (Line 20)
}
// 0 finish declraing
// 1 Main program starts bellow
// 2 BEFORE MAIN CALL runs
console.log('BEFORE MAIN CALL');
// 3 HighorderFunc() executes
const result = higherOrderFunc(() => {
  console.log('INSIDE CALLBACK');
})
// 9 AFTER MAIN CALL is executed
console.log('AFTER MAIN CALL');
// 10 main program is done, time to check up on our setTimeout to see if its done
// 11 set Timeout finishes about now.... now go inside of setTime out and
// run the callback of timeout
// finish.....

// BEFORE MAN CALL
// BEFORE TIMEOUT CALL
// AFTER  TIMEOUT CALL
// AFTER TIME MAN CALL
// INSIDE CALLBACK