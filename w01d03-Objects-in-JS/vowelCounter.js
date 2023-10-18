const string = `🍌🍌We're whalers on the moon,
We carry a harpoon,
For they 🍌ain't no whales
So we tell tall tales
And sing our whaling tune.🍌🍌`;


// 
// how many letter 'A's are in this sentance
// Write a function that takes in a string,
//and counts how many letter "A" are in this string

const countA = function(str) {
  // steps to take 

  // add a counter to record number of A's
  let aCounter = 0;
  // convert everything to lowerCase first
  const lowerCaseString = str.toLowerCase();
  // iterate through the string (loop)
  // what kind of loop should we use? FOR OF
  for (let letter of lowerCaseString) {
    // if a then iterate the counter
    if (letter === 'a') {
      // aCounter = aCounter + 1;
      aCounter++;
    }
  }
  return aCounter;

}

// console.log(countA(string));





//////////////////////////////////////////////////////////////

// Write a function called countVowels that takes in a string, 
// that counts ALL the vowels in a given string



const countVowels = function(str) {

  const result = {a: 0, e: 0, i: 0, o: 0, u: 0, y: 0 };
  // convert everything to lowerCase first
  const lowerCaseString = str.toLowerCase();
  // iterate through the string (loop)
  // what kind of loop should we use? FOR OF
  for (let letter of lowerCaseString) {
    // if a then iterate the counter
    if (letter === 'a') {
      // aCounter = aCounter + 1;
      result.a++;
    } else if (letter === 'e') {
      // aCounter = aCounter + 1;
      result.e++;
    } else if (letter === 'i') {
      // aCounter = aCounter + 1;
      result.i++;
    } else if (letter === 'o') {
      // aCounter = aCounter + 1;
      result.o++;
    } else if (letter === 'u') {
      // aCounter = aCounter + 1;
      result.u++;
    } else if (letter === 'y') {
      // aCounter = aCounter + 1;
      result.y++;
    }
  }
  // return an array or object 
  return result;
}


// console.log(countVowels(string));











// countLetters
// count every letter of a string..............

const countLetters = function(str) {
  const result = {};
  // convert everything to lowerCase first
  const lowerCaseString = str.toLowerCase();
  // iterate through the string (loop)
  // what kind of loop should we use? FOR OF
  for (let letter of lowerCaseString) {
    // if (the letter we are looping through is not in our object)
    if (result[letter] === undefined) {
      result[letter] = 1;
    } else {
      result[letter]++;
    }

  }
  // return an array or object 
  return result;
}


console.log(countLetters(string));

