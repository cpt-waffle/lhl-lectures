const string = `We're whalers on the moon,
We carry a harpoon,
For they ain't no whales
So we tell tall tales
And sing our whaling tune.`;


// how many letter 'A's are in this sentance
// Write a function that takes in a string, and counts how many letter "A" are in this string

const countA = function(str) {
  // steps to take 

  // make a counter for letter a
  let aCounter = 0;
  const strLowerCase = str.toLowerCase();

  // loop throughe string (for of)
  for (let letter of strLowerCase) {
    // if we see a count a
    if (letter === 'a') {
      aCounter++
    }
  }


  // return the aCounter
  return aCounter;
}

// console.log(countA(string));
//////////////////////////////////////////////////////////////

// Write a function called countVowels that takes in a string, 
// that counts ALL the vowels in a given string

const countVowels = function(str) {
  // a e i o u y
  // steps to take 
  console.log('countVowels');
  // make a counter for letter a
  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    y: 0,
  }

  const strLowerCase = str.toLowerCase();

  // loop throughe string (for of)
  for (let letter of strLowerCase) {
    // if we see a count a

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


  // return the aCounter
  return vowels;
}


// console.log(countVowels(string));










// countLetters
// count every letter of a string..............

const countLetters = function(str) {
 // a e i o u y
  // steps to take 
  console.log('countLetters');
  // make a counter for letter a
  const allCharacters = {}

  const strLowerCase = str.toLowerCase();

  // loop throughe string (for of)
  for (let letter of strLowerCase) {
    // if we see a letter we make a key for it with value 1
    if (allCharacters[letter] === undefined) {
      allCharacters[letter] = 1;
    } else {
      allCharacters[letter]++;
    }

  }


  // return the aCounter
  return allCharacters;

}

console.log(countLetters(string));

