// write a function that takes in a string, 
// checks if the string is the same string 
// backwards, if it is, return `true`, 
// if it's not return `false`.
//                   my gym
const palindrome = (string) => {
  // code goes here
  // remove the spaces from the string and store in a variable
  //                       ['my', 'gym']    'mygym'
  const noSpaceStr = string.split(' ').join(''); // mygym
  // reverse() only works on arrays, so we will convert our string into an array first
  // reverse the string and store it in another variable
  const arr = noSpaceStr.split(''); // ['m', 'y', 'g', 'y', 'm'];
  const reverseArr = arr.reverse(); // reverse the array 
  const reverseStr = reverseArr.join(''); // make it back into a string "mygym"
  // check if no space string == reverse no space string
  return noSpaceStr === reverseStr;
  // check if reverse string === the regular string ( no spaces )

}
// module.exports = {}

module.exports = palindrome;