const string = `We're whalers on the moon,
We carry a harpoon,
For they ain't no whales
So we tell tall tales
And sing our whaling tune.`;

// how many letter 'A's are in this sentance

const countA = function(string) {
  // for (let i = 0; i < string.length; i++) {
  //   console.log(i);
  //   console.log(string[i]);
  // }

  // index 
  // for (let i in string) {
  //   console.log(i);
  //   console.log(string[i]);
  // }

  // of is for values 
  const lowercaseString = string.toLowerCase();
  let aCounter = 0;
  for (let c of lowercaseString) {
    if (c === 'a') {
      aCounter++;
    }
  }
  return aCounter;
}

// console.log('counter letter A = ',countA(string));

// write a function that counts all vowels in a string

const counterVowels = function(string) {
  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    y: 0
  }
  const lowercaseString = string.toLowerCase();
  for (let c of lowercaseString) {
    if (c === 'a') {
      vowels.a++;
    }
     if (c === 'e') {
      vowels.e++;
    }
     if (c === 'i') {
      vowels.i++;
    }
     if (c === 'o') {
      vowels.o++;
    }
     if (c === 'u') {
      vowels.u++;
    }
     if (c === 'y') {
      vowels.y++;
    }
  }

  return vowels;
}

console.log(counterVowels(string));

// Count me every letter, in a string,
//if a letter does not exist I do not want to see it

const countLetters = function(string) {
  const obj = {};
  const lowercaseString = string.toLowerCase();
  for (let c of lowercaseString) {
    // let c = 'w';
    // how do i make a key with the value of c?
    ////////// if key DOES NOT exist, create it with value of 1

    // false, 0, undefined, null, NAN, ''
    if (!obj[c]) {
      obj[c] = 0;
    }
    obj[c]++;
    
    ///////// if key DOES exist, increment it by ++


    // how do i assign a value to the key ?
    // Objects KEYS are UNIQUE
    // you CANNOT have duplicates of same KEY name

  }

  return obj;
}


console.log(countLetters(string));