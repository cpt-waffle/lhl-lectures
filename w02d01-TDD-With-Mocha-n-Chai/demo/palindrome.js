// write a function that takes in a string, 
// checks if the string is the same string 
// backwards, if it is, return `true`, 
// if it's not return `false`.

const palindrome = function(string) {
  // remove the space from string!
  const noSpaceStr = string.replace(/ /g,'');
  // how do i remove all the spaces from a string??
  // use reverse() to switch the string backwards
  const reverseArr = noSpaceStr.split('').reverse();
  const reverseStr = reverseArr.join('');
  // check if reversedStr is equal to string!
  return noSpaceStr === reverseStr;
}

const isTrue = function(val) {
  return val == true;
}


module.exports = palindrome;
