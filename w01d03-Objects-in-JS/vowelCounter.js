const string = `We're whalers on the moon,
We carry a harpoon,
For they ain't no whales
So we tell tall tales
And sing our whaling tune.`;

// how many letter 'A's are in this sentance

// when encountering the letter A we need to record a number ( increment it )
// after we went through everything, return the result.

const countLetterA = function(str) {
  let aCount = 0;
  const lowerCaseStr = str.toLowerCase();
  // how to go through the string, letter by letter ( loop )
  for (let letter of lowerCaseStr) {
    if (letter === 'a') {
      aCount++;
    }
  }
  return aCount;
}

const result = countLetterA(string);
// console.log(`There are ${result} A letters in the sentance`);


const countVowels = function(str) {
  // define an object with all the vowels
  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    y: 0
  }
  const lowerCaseStr = str.toLowerCase();
  for (let letter of lowerCaseStr) {
    if (letter === 'a') {
      vowels.a++;
    }
    if (letter === 'e') {
      vowels.e++;
    }
    if (letter === 'i') {
      vowels.i++;
    }
    if (letter === 'o') {
      vowels.o++;
    }
    if (letter === 'u') {
      vowels.u++;
    }
    if (letter === 'y') {
      vowels.y++;
    }
  }
  return vowels;
}

const vowelsResult = countVowels(string);
// console.log(vowelsResult);


const countLetters = function(str) {
  // do not show me the letters that don't exist in my string
  const result = {};
  // when a variable contains the KEY NAME
  // we will use the square bracket notation
  // let num = 0;
  //arr[num] arr[1]
  const lowerCaseStr = str.toLowerCase();
  for (let letter of lowerCaseStr) {
    // if the key doesnt exist in my object, set it 1
    // 6 values that are falsey
    // undefined, false, 0, NaN, null, ''
    if (!result[letter]) { 
      result[letter] = 1;
    } else {
      result[letter]++;
    }
    //               Expression      ? if true : if false 
    result[letter] = !result[letter] ? 1 : result[letter] + 1 ;

    // turniary operator: if else.. in a one line statement


    // if the key DOES exist in my object, ++
  }
  return result
}

const letters = countLetters(string);
console.log(letters);