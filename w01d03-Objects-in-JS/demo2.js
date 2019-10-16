//
let str = 'dog dog dog cat cat dog cat dog cat';

// make a function that takes in a string
// and returns an object that has the amount of
// dog words that was in string, and the amount of
// cat words that were in a strng.

let dogCatCounter = function(string) {
  let arr = string.split(' ');
  let obj = { dog: 0, cat: 0 };
  // console.log(arr);
  for (word of arr) {
    // console.log(word);
    if (word === 'dog') {
      // console.log('I FOUND A DOG !!!!!!');
      obj.dog += 1;
    }
    if (word === 'cat') {
      obj.cat += 1;
      // console.log("I FOUND A CAT but im alergic........");
    }
  }
  return obj;
};

console.log('There are:   ',dogCatCounter(str));