
const hello = (v) => {
  return new Promise((resolve, reject) => {
    if (!v) {
      setTimeout(() => {
        resolve('hello there');
      }, 1000)
    } else {
      reject(':(');
    }
  })
}

module.exports = hello;