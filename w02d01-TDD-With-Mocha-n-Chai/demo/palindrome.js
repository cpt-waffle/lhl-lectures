// write a function that takes in a string, 
// checks if the string is the same string 
// backwards, if it is, return `true`, 
// if it's not return `false`.

// abba ===> abba
// hello ==> olleh

const palindrome = str => {

  const strNoSpaces = str.replaceAll(' ', '');
  const array = strNoSpaces.split('');
  const arrayReversed = array.reverse();
  const strReversed = arrayReversed.join('');

  return strNoSpaces === strReversed;
}


module.exports = palindrome;
// what you put into module.exports, can be used by other files 
// as long as the file gets required/imported
