const sanitized = (string) => {
  return string.split(' ').join('').toLowerCase();
}


const palindrome = (string) => {
  // guard clause
  if (!string || typeof string !== 'string') return false;
  // split the string and remove all spaces and make its in one case ( uppercase or lowecase)
  const sanitizedStr = sanitized(string);
  const reversedStr = sanitizedStr.split('').reverse().join('');

  return sanitizedStr === reversedStr;

  // take the new sanitized string, reverse it, compare the two

}
module.exports =  palindrome;

