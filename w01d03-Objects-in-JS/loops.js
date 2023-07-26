  //  c style -- the most common one you know!
  for (let i = 0; i < str.length; i++) {
    console.log("i", i); // number
    console.log(str[i]) // and a way to access that number

  }


  //  for in loop
  for (let i in str) {
    console.log("i", i); // number
    console.log(str[i]) // and a way to access that number

  }

    //  for of loop
    for (let i of str) {
      console.log("i", i); // the value
  
    }