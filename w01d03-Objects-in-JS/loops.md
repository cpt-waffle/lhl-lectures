   //  declaration   statement; condition
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
  // for in...

  console.log("for in");
  for (let i in str) { // index
    console.log(str[i]);
  }

  // for of...
  console.log("for of ----------------------");
  for (let i of str) { // value
    console.log(i);
  }
