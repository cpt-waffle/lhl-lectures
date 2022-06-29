const string = `We're whalers on the moon,
We carry a harpoon,
For they ain't no whales
So we tell tall tales
And sing our whaling tune.`;

// how many letter 'A's are in this sentance

const countLetterA = function(str) {
  // how to loop through a string?
   // Note: if its an array of characters I should be able to use a for loop
  // how to loop through every letter of a string?

  // C Style --- for (let i = 0; i< arr.length; i++)
  // for (let i = 0; i < str.length; i++) {
  //   console.log(str[i]);
  // }
  // // For in ---- for (let i in arr)
  // console.log("////////////// in loop")
  // for (let i in str) { // in -- index, goes through every index until the end
  //   console.log(str[i]);
  // }
  // console.log("///////////// of loop")
  let a = 0;
  for (let val of str) { // of -- will loop through EVERY VALUE of the array
    // console.log(val);
    if (val === 'a') {
      a++;
    }
  }
  return a;

  // For of ---- for (let i of arr)

  // how to check if current interation is the letter 'a'?
  // how to return the value that made for how many letter A's are in the string?
}

const result = countLetterA(string);
// console.log("Number of lowercase letter 'a': ", result);


//// a function that counts ALL OF THE VOWELS in a string 
// a collection needs to be returned 
// [ 3, 2, 6, 9, 0] or {a: 9, e: 3, i: 6, o: 0, }

const countVowels = function(str) {
  // refactored
  const resultObj = {
    a:0,
    e:0,
    i:0,
    o:0,
    u:0,
    y:0
  }
  const strLowerCase = str.toLowerCase();
  for (let val of strLowerCase) {
    if (val === 'a') {
      resultObj.a++
    }
    if (val === 'e') {
      resultObj.e++
    }
    if (val === 'i') {
      resultObj.i++
    }
    if (val === 'o') {
      resultObj.o++
    }
    if (val === 'u') {
      resultObj.u++
    }
    if (val === 'y') {
      resultObj.y++
    }
  }
  return resultObj;
}

// const result2 = countVowels(string);
// console.log(result2);

// Count EVERY SINGLE LETTER that you encounter (with spaces, and symbols included)
// in the string!

// if the letter does not exist I dont want to see the value: 0
///////////////////////////
// We have been working with objects where we KNOW they key

///////// Objects
// How do we create new keys after an object was created?
// How do I access something that I dont know exists in an object?

const key = 'transmission';
const randObj = {a: 33, b: 3, transmission: 6, v: 0, z: -2};
const array = [1,2,3,4,5];
//           0,1,2,3,4

console.log(randObj.key);
// when you have a key_name in a variable YOU CANNOT USE the Dot notation
// you have to use the SQUARE BRACKET NOTATION INSTEAD 
// console.log(randObj[key]);
// console.log(randObj['transmission']);

// //// Key/Value Creation 

// randObj.fruit = 'banana';
// console.log(randObj);
// /////////////////////////
// randObj['vegetable'] = 'pickle';
// console.log(randObj);

////////////////////////////////////////////////////////////////
// In an object KEYS are UNIQUE
// you cannot have THE SAME KEY TWICE in an object ( only once )
const countEveryLetter = function(str) {
  const resultObj = {};
  const strLowerCase = str.toLowerCase();
  for (let val of strLowerCase) {
    // when the KEY does not exist set it to = 1
    // if they KEY DOES EXIST = ++
    // false, undefined, null, ' ', 0, NaN
    // !resultObj[val] ? resultObj[val] = 1 : resultObj[val]++;
    if (!resultObj[val])
      resultObj[val] = 1;
    else 
      resultObj[val]++;
  }
  return resultObj
}

const result3 = countEveryLetter(string);
console.log(result3);
