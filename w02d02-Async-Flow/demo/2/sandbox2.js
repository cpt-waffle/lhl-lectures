const addTwo = (num, cb) => {
  let result = num + 2;
  cb(result);
  setTimeout(() => {
    console.log("timeout end");
  }, 2000);
}

addTwo(4, (result) => {
  console.log("The Result is ===>", result);
  console.log("We are Done");
})

// Execution

// line 9 - runs the add two
// line 2 - INSIDE addTwo adds result
// line 3 - sends it back to the callback
// line 10 - first line of the callback to show result
// line 11 - prints We Are done
// line 4  - INSIDE addTwo starts Timout and sets its in the que
// line 5  - INSIDE timeout finaly executes after 2 seconds

// END