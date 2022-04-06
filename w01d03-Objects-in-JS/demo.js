const string = `We're whalers on the moon,
We carry a harpoon,
For they ain't no whales
So we tell tall tales
And sing our whaling tune.`;



//                                <----no  objects ()
// whenever we see the letter e we increment the counter

// C-STyle loop
// for (let i=0; i <= string.length -1 ; i++) {
  //   console.log(string[i]);
  // }
  
  // // for in
  // for (let i in string) {
    //   console.log(i, '<---');
    // }
    
    // for of
// make a ecounter

// 
// this function returns an array
// and the first element of the array is E
// the 2nd element of the array is A
// ...
const countEandA = (string) => {
  let eCounter = 0;
  let aCounter = 0;
  // loop through the string!
  for (let letter of string) {
    // Count how many letter 'e''s are in this string
    if (letter === 'e') {
      eCounter++;
    }
    if (letter === 'a') {
      aCounter++;
    }
  }
  const resultArr = [];
  const resultObj = {};
  resultArr.push(eCounter);
  resultObj.e = eCounter;
  resultObj.a = aCounter;
  resultArr.push(aCounter);

  return resultObj;
  // return resultArr;
}

const result = countEandA(string);
// What if we store data,,, BUT  WE HAD ALITTLE OF CONTEXT
// of what we are storing ('name of a value')
// What if the order, did not matter?


// remember the order!!!
console.log(result);
console.log("e = ", result.e, 'a = ', result.a );