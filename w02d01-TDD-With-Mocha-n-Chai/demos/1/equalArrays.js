const equalArrays = (arrOne, arrTwo) => {
  if (!(Array.isArray(arrOne) || Array.isArray(arrTwo))) return false;

  if (!(arrOne.length === arrTwo.length)) return false;

  for (let index in arrOne) {
    if (arrOne[index] !== arrTwo[index]) return false;
  }

  return true;
}

module.exports = { equalArrays };