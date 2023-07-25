// write a function that takes in a string, 
// checks if the string is the same string 
// backwards, if it is, return `true`, 
// if it's not return `false`.


// TTD

const palindrome = (str) => {
  // console.log(str);
  //...
  // take a string and reverse it and store it 
  const strNoSpace = str.replaceAll(' ', '');
  // - how to convert a string into into an array
  const strArray = strNoSpace.split('');
  // - how to reverse (reverse())
  const reverseArr = strArray.reverse();
  // - how to convert a string into an array
  const reverseStr = reverseArr.join('');
  // - how to check if 2 strings match
  if (reverseStr === strNoSpace) {
    return true;
  } else {
    return false;
  }
  // then check if reverse string is equal to the original
}

module.exports = palindrome;


// modules
// share information, functions, variables, arrays, objects, to another file....