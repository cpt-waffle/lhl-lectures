const string = `We're whalers on the moon,
We carry a harpoon,
For they ain't no whales
So we tell tall tales
And sing our whaling tune.`;


// how many letter 'A's are in this sentance
// Write a function that takes in a string, and counts how many letter "A" are in this string

const countA = function(str) {
  // store the counter somewhere so it does not get reset by the loop
  let aCounter = 0;
  // go through the string  (loop)
  // make string into lowercase
  const lowercaseStr = str.toLowerCase();

  for (let letter of lowercaseStr) { // value
    // count the letter when we see it (if letter is a) count up +1
    if (letter === 'a' ) {
      aCounter++;
    }
  }

  return aCounter;
  // return the counter of letter A


}

// console.log(countA(string));


// Write a function called countVowels that takes in a string, 
// that counts ALL the vowels in a given string

const countVowels = function(str) {
  // store the counter somewhere so it does not get reset by the loop

  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    y: 0,
  }
  // go through the string  (loop)
  // make string into lowercase
  const lowercaseStr = str.toLowerCase();

  for (let letter of lowercaseStr) { // value
    // count the letter when we see it (if letter is a) count up +1
    if ( letter === 'a' ) {
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

  return vowels;
  // return the counter of letter A
}


// console.log(countVowels(string));
















// countLetters
// count every letter of a string..............

const countLetters = function(str) {

  const result = {};
  // go through the string  (loop)
  // make string into lowercase
  const lowercaseStr = str.toLowerCase();

  for (let letter of lowercaseStr) { // value
    // count the letter when we see it (if letter is a) count up +1

    // result[letter] = result[letter] === undefined ? 1 : result[letter]++
    if (result[letter] === undefined) {
      result[letter] = 1;
    } else {
      result[letter]++; // result[letter] = result[letter] + 1
    }
  }


  // return the result
  return result;
}

console.log(countLetters(string));
console.log(countLetters("this is the square bracket notation in objects"));
