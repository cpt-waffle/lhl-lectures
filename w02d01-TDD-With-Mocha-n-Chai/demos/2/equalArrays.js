
const equalArrays = (arrOne, arrTwo) => {
  if(!(Array.isArray(arrOne) || Array.isArray(arrTwo))) {
    return false;
  }
  if (arrOne.length !== arrTwo.length) {
    return false;
  }

  for (let index in arrOne) {
    if(Array.isArray(arrOne[index]) && Array.isArray(arrTwo[index])) {
      let result = equalArrays(arrOne[index], arrTwo[index]);
      // equalArrays recursion returned false which means
      // the sub arrays are not equal!
      if (!result) {
        return false;
      }
    } else {
      if (arrOne[index] !== arrTwo[index]) {
        return false;
      }
    }

  }
  return true;

}

module.exports = { equalArrays };

// console.log(module.exports);