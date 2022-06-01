const string = `We're whalers on the moon,
We carry a harpoon,
For they ain't no whales
So we tell tall tales
And sing our whaling tune.`;

// how many letter 'A's are in this sentance

// const array = [23, 54, 76, 48, 90, 1];
// // C-style for loop

// for (let i = 0; i < array.length; i++ ) {
//   console.log(i);
//   console.log(array[i]);
// }
// // for in 

// for (let k in array) {
//   console.log("---> k, ", k);
//   console.log(array[k]);
// }

// // for of 

// for (let j of array) {
//   console.log("--> j, ", j);
// }

// forEach()

const  arr = [43,54,65,31]
//            0, 1  2, 3

const countVowels = function(string) {
  // let aCounter = 0;
  const vowels = {
    a:0,
    e:0,
    i:0,
    o:0,
    u:0,
    y:0,
  }

  // if the key is stored in a variable 
  // we will use the SQUARE BRACKET NOTATION


  // when we access a key that does not exist, we get back an undefined!!
  // vowels.banana // undefined

  // if we put these into an array
  // we dont the order of what is what?


  // how do i loop through a string?
  for (let letter of string ) {
    if (vowels[letter] !== undefined) {
      vowels[letter]++;
    }
  }
  return vowels;
}

const result = countVowels(string);
//console.log('result is, ', result);

// TS

const countEveryLetter = function(string) {
  const letters = {
  };
  const lowecaseString = string.toLowerCase();
  for (let letter of lowecaseString ) {
    // if im looping through a letter and it doesnt exist in my letters OBJECT
    // i will create a key/value pair ??
    if (letters[letter] === undefined) {
      letters[letter] = 1;
    } else {
      letters[letter]++;
    }
    // it it does EXIST i will ++
  
  }
  return letters;
}

const result2 = countEveryLetter(string);
console.log('result2 is, ', result2);
