// write a function that takes in a string, 
// checks if the string is the same string 
// backwards, if it is, return `true`, 
// if it's not return `false`.

const palindrome = str => {
  // code goes here...
  // const strNoSpace = str.replace(/\s/g, '' ); 
  const strNoSpace = str.replaceAll(' ', '');
  // take a string, reverse it
  const strArr = strNoSpace.split('');
  const reversedArr = strArr.reverse();
  const reversedStr = reversedArr.join("");
  // check if a string is the same string backwards 

  return strNoSpace === reversedStr;

}

module.exports = palindrome;
