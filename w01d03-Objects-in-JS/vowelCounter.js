const string = `We're whalers on the moon,
We carry a harpoon,
For they ain't no whales
So we tell tall tales
And sing our whaling tune.`;

// how many letter 'A's are in this sentance

const countA = function(str) {
  // convert the str into a lowercase
  lowercaseStr = str.toLowerCase();
  let aCounter = 0;
  // loop through the string
  for (letter of lowercaseStr) {
    // console.log(letter);
    // if we see a letter A then count it 
    if (letter === 'a') {
      aCounter++;
    }
  }
  // return the counted number
  return aCounter
}

// console.log(countA(string));


// write a functions that counts all the vowels in a string

const countVowels = function(str) {
  lowercaseStr = str.toLowerCase();
  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    y: 0
  }

  for (letter of lowercaseStr) {
    if (['a','e','i','o','u','y'].includes(letter)) {
      vowels[letter]++;
    }
  }
  return vowels;
}


console.log(countVowels(string));


// Count Every letter of a string...

const countLetters = function(str) {
  lowercaseStr = str.toLowerCase();

  // if we see the same letter again we increment that letteer +1 ++
  const result = {};
  for (letter of lowercaseStr) {
    // if we see a letter we make a key with the same letter and val = 1
    if (!result[letter]) { // hey! result at key 'w' has anything? FALSE

      // result['w'] = 1
      // {w: 1}
      result[letter] = 1;
    } else {
      //                    1
      // result['w'] = result['w'] + 1
      // result['w'] = 2
      result[letter]++;
    }
  }

  return result;
}


console.table(countLetters(string));