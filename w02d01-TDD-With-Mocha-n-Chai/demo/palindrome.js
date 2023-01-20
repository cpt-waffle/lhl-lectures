// write a function that takes in a string, 
// checks if the string is the same string 
// backwards, if it is, return `true`, 
// if it's not return `false`.
                          "kayak"
const palindrome = function(string) {
  // remove the space from string!
  const noSpaceStr = string.replace(/ /g,''); "kayak"
  // how do i remove all the spaces from a string??
  // use reverse() to switch the string backwards
  const reverseArr = noSpaceStr.split('').reverse();
                        ['k', 'a', 'y', 'a', 'k']
  const reverseStr = reverseArr.join('');
                         'kayak'
  // check if reversedStr is equal to string!
  return noSpaceStr === reverseStr;
          'kayak'   === 'kayal'
}

// kayak
console.log(" Expected Tests!")
console.assert(palindrome('kayak'), 'kayak IS a palindrome');

// // // racecar
console.assert(palindrome('racecar'), 'racecar IS a palindrome');
// madam
console.assert(palindrome('madam'), 'madam IS a palindrome');
// civic
console.assert(palindrome('civic'), 'civic IS a palindrome');
// level
console.assert(palindrome('level'), 'level IS a palindrome');


// // edge cases
// my gym
console.log("Edge Case Tests!")
console.assert(palindrome('"my gym"'), '"my gym" IS a palindrome');
// a man a plan a canal panama
console.assert(palindrome('"a man a plan a canal panama"'), '"a man a plan a canal panama" IS a palindrome');
