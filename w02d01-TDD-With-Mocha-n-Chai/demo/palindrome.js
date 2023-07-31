// write a function that takes in a string, 
// checks if the string is the same string 
// backwards, if it is, return `true`, 
// if it's not return `false`.


const palindrome = str => {
  // take a string, reverse it
  // remove all spaces from string
  const noSpaceStr = str.replaceAll(' ', '');
  // take that reverse string, compare it with the original
     // --> convert string into array
    const strArray = noSpaceStr.split('');
     // --> reverse the array  // reverse();
    const strReverseArray = strArray.reverse();
     // --> convert it back to a string
    const strReverse = strReverseArray.join('');
  // if its true return true if false return false
  if (strReverse === noSpaceStr) {
    return true;
  } else {
    return false; 
  }
}

module.exports = palindrome