
const hello = (bool) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!bool) {
        return resolve('Hi There!');
      } else {
        return reject('>:(');
      }
    },2000);
  })
}

module.exports = hello;