const string = `We're whalers on the moon,
We carry a harpoon,
For they ain't no whales
So we tell tall tales
And sing our whaling tune.`;

// how many letter 'A's are in this sentance

const countA = function(str) {
  // convert to lowecase, incase of any edge cases
  const lowerCaseStr = str.toLowerCase();

  // make a acounter variable to record how many times i've seen the letter a
  let aCount = 0;
  // for i of
  // loop through a string
  for (let letter of lowerCaseStr) {
    // if we see 'a', aCount++
    if (letter === 'a') {
      aCount++;
    }
  }
  return aCount;
}

// console.log(countA(string));



// write a functions that counts all the vowels in a string

const countVowels = function(str) {
  const lowerCaseStr = str.toLowerCase();

  const vowelCount = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    y: 0
  } 
  for (let letter of lowerCaseStr) {
    // if we see 'a', aCount++
    if (letter === 'a') {
      vowelCount.a++;
    }
    if (letter === 'e') {
      vowelCount.e++;
    }
    if (letter === 'i') {
      vowelCount.i++;
    }
    if (letter === 'o') {
      vowelCount.o++;
    }
    if (letter === 'u') {
      vowelCount.u++;
    }
    if (letter === 'y') {
      vowelCount.y++;
    }
  }
  return vowelCount;

}

// const result = countVowels(string);
// console.log(countVowels(string));




// Count Every letter of a string...

const countLetters = function(str) {
  const result = {};
  const lowerCaseStr = str.toLowerCase();
  // Objects CANNOT HAVE same keys more than once!!!
  for (let letter of lowerCaseStr) {

    // if letter does not exist in the object, create it and set it to 1
    if (!result[letter]) {
      result[letter] = 0;
    }
    result[letter]++;

    // if (!result[letter]) {
    //   result[letter] = 1;
    // }
    // } else {
    //   result[letter]++
    // }

    // if it does exist, increment it by 1
  }

  return result;

}


console.log(countLetters(string));