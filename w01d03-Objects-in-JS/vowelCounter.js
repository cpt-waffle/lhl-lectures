const string = `We're whalers on the moon,
We carry a harpoon,
For they ain't no whales
So we tell tall tales
And sing our whaling tune.`;
'hello'


// how many letter 'A's are in this sentance

const countA = function(str) {
  // edge case: what about capital letter A's?
  const lowercaseStr = str.toLowerCase();

  // loop through my string (letter by letter)
  let aCounter = 0;
  for (let letter of lowercaseStr) {
    // if i encountered the letter A i'd like to count it
    if (letter === 'a') {
      // aCounter = aCounter + 1;
      aCounter++;
    }
  }
  // once loop is finished return the number of A's that you counted.


  return aCounter;

}

// console.log(countA(string));


// Write a function called countVowels that takes in a string, that counts ALL the vowels in a given string.
const countVowels = function(str) {
  //         a   e   i  u  o  y 
  // array  [10, 5, 16, 4, 3, 0]
  // object {a:10, e: 5, .........}

  const lowercaseStr = str.toLowerCase();

  const vowelCount = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    y: 0
  };

  for (let letter of lowercaseStr) {
    // count every vowel we encounter 

    // if we see a letter a increment the key a inside of our object by 1
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
    // if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'u' || letter === 'y') {
    //   if (!vowelCount[letter]) {
    //     vowelCount[letter] = 1
    //   } else {
    //     vowelCount[letter]++;
    //   }
    // }


  }
  return vowelCount
}

// console.log(countVowels(string));


// count every letter of a string..............

const countLetters = function(str) {
  
  const lowercaseStr = str.toLowerCase();
  const result = {};
  for (let letter of lowercaseStr) {
    // letter = a;
    //
    // if the letter that im currently looping through is not in my result object
    if (!result[letter]) {                           // result['a']=1      = undefined
      //   create it!
      result[letter] = 1;
    } else {
      // if it is increment it!
      result[letter]++;
    }
  }

  return result;
}

console.log(countLetters(string));
