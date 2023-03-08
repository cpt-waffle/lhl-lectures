const string = `We're whalers on the moon,
We carry a harpoon,
For they ain't no whales
So we tell tall tales
And sing our whaling tune.`;


// how many letter 'A's are in this sentance
// Write a function that takes in a string, and counts how many letter "A" are in this string

const countA = function(str) {
  // have a variable/buffer
  let aCounter = 0;
  // we need to iterate through the string
  const lowercaseStr = str.toLowerCase();
  // == check the value but not the type   1 == '1' true
  for (let letter of lowercaseStr) {
    //  condition: if I see letter A, count it
    if (letter === 'a') {
      aCounter++;
    }
  }

  // return how many letter As we have encountered
  return aCounter;
}


// console.log(countA(string));

// Write a function called countVowels that takes in a string, 
// that counts ALL the vowels in a given string

const countVowels = function(str) {
  // arrays are non contextual, and use index 
  // and objects have context in their keys

  let vowels = {a:0, e:0, i:0, o:0, u:0, y:0};
  const lowercaseStr = str.toLowerCase();

  for (let letter of lowercaseStr) {

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
  return vowels;
}

// console.log(countVowels(string));


// countLetters
// count every letter of a string..............

const countLetters = function(str) {
  let result = {};
  const lowercaseStr = str.toLowerCase();
          // a
  for (let letter of lowercaseStr) {
    // make a key 'A' with value 1

    // if the letter im currently looping through is not in my object
    if (result[letter]) {
      // increment it!
      result[letter]++;
    } else {
      // create it!
      result[letter] = 1;
    }

  }
  return result;
}

console.log(countLetters(string));