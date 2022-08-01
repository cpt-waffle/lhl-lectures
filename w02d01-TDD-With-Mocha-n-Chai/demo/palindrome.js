// write some code so the tests will pass
const palindrome = function(str) {
  const noSpacesStr = str.split(' ').join('');
  // const noSpacesStr = str.replace(/\s+/g, "");
  const reversedStr = noSpacesStr.split('').reverse().join('');
  return reversedStr === noSpacesStr;
}
module.exports = palindrome;
