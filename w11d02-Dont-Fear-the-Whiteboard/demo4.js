// Pallindrome

const palindrome = str => {
  if (str === str.reverse())
    return true;
  else
    return false;
}