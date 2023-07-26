const string = `We're whalers on the moon,
We carry a harpoon,
For they ain't no whales
So we tell tall tales
And sing our whaling tune.`;


// how many letter 'A's are in this sentance
// Write a function that takes in a string, and counts how many letter "A" are in this string

const countA = function(str) {
  // --- steps to take
  // set a counter for letter a
  const strLowercase = str.toLowerCase();

  let aCounter = 0;
  //  for of loop
  for (let letter of strLowercase) {
    // if i see letter a then counter goes up by +1
    if (letter === 'a') {
      aCounter++;
    }
  }

  // return the counter!
  return aCounter;
}

// console.log(countA(string));













// console.log(countA(string));


// Write a function called countVowels that takes in a string, 
// that counts ALL the vowels in a given string

const countVowels = function(str) {
  // --- steps to take
  const strLowercase = str.toLowerCase();
  
  // set a counter for letter a
  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    y: 0
  }
  //  for of loop
  for (let letter of strLowercase) {
    // if i see letter a then counter goes up by +1
    if (letter === 'a') {
      vowels.a++;
    } else if (letter === 'e') {
      vowels.e++;
    } else if (letter === 'i') {
      vowels.i++;
    } else if (letter === 'o') {
      vowels.o++;
    } else if (letter === 'u') {
      vowels.u++;
    } else if (letter === 'y') {
      vowels.y++;
    }

  }
  // return the counter!
  return vowels
}


// console.log(countVowels(string));










// countLetters
// count every letter of a string..............

const countLetters = function(str) {
    // --- steps to take
    const strLowercase = str.toLowerCase();
  
    //an object of letters;
    const result = {};

    //  for of loop
    for (let letter of strLowercase) {
      // if we see a letter, and its not in our object, create it with value of 1
      if (result[letter] === undefined) {
        result[letter] = 1;
      } else {
        // if we see a letter, and it IS in our object, increment it by +1
        result[letter]++;
      }
    }
    // return the counter!
    return result;
}


console.log(countLetters(string));