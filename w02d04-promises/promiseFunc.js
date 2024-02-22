

const hello = (name) => {
  return new Promise((resolve, reject) => {
    if (name === 'vas') {
      reject('bad name!')
    } else {
      console.log('hello ', name);
      resolve(3.14);
    }
  })
}

a = hello('vas').then(val => {
  console.log('the value i got back is ', val);

});


console.log(a);


