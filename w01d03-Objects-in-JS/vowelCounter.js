const string = `We're whalers on the moon,
We carry a harpoon,
For they ain't no whales
So we tell tall tales
And sing our whaling tune.`;


// how many letter 'A's are in this sentance
// Write a function that takes in a string, and counts how many letter "A" are in this string

const countA = function(str) {
  // -- steps to take 
  // convert to lowerCase to make sure we count all letter A's
  const strLowercase = str.toLowerCase();

  // how do count when we see the letter A/a appear ?
  let aCounter = 0;
  // how do i go through the string, letter by letter? LOOP?
  // for (let i = 0; i < str.length; i++) {
    for (letter of strLowercase) {
    // console.log("letter --->, ", strLowercase[i]);
    if (letter === 'a') {
      aCounter++;
    }
  }
  // for in, for of ???


  // how do i return the count all of the letter a's?
  return aCounter;
}

// console.log(countA(string));










// Write a function called countVowels that takes in a string, 
// that counts ALL the vowels in a given string

const countVowels = function(str) {
  // -- steps to take 
  // convert to lowerCase to make sure we count all letter A's
  const strLowercase = str.toLowerCase();

  // how do count vowels  ?
  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    y: 0
  };
  let aCounter = 0;
  // how do i go through the string, letter by letter? LOOP?
  // for (let i = 0; i < str.length; i++) {
    for (letter of strLowercase) {
    // console.log("letter --->, ", strLowercase[i]);
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
  // for in, for of ???


  // how do i return the count all of the letter a's?
  return vowels;
}


// console.log(countVowels(string));










// countLetters
// count every letter of a string..............

const countLetters = function(str) {
  const strLowercase = str.toLowerCase();
  // how do count vowels  ?
  const lettersCounter = {};
  // how do i go through the string, letter by letter? LOOP?
  // for (let i = 0; i < str.length; i++) {
    for (letter of strLowercase) {
    // console.log("letter --->, ", strLowercase[i]);
    if (lettersCounter[letter] === undefined) {
      lettersCounter[letter] = 1;
    } else {
      lettersCounter[letter]++;
    }

  }
  // for in, for of ???

  // how do i return the count all of the letter a's?
  return lettersCounter;

}

console.log(countLetters(string));

