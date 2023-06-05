// write a function that takes in a string, 
// checks if the string is the same string 
// backwards, if it is, return `true`, 
// if it's not return `false`.


const palindrome = str => {
  //...
  //                      []            ''           ''
  const strNoSpace = str.split(' ').join('').toLowerCase();
  const reverseStr = strNoSpace.split('').reverse().join('');

  // returns true/false
  return strNoSpace === reverseStr;
}

const hello = () => {
  console.log('hello')
}

//               {palindrome: palindrome, hello: hello }
module.exports = { palindrome, hello, PI: 3.14};