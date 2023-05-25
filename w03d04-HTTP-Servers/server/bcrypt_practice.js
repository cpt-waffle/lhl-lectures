const bcrypt = require('bcryptjs');

// const password = 'password';
// console.log(password);
// const salt = bcrypt.genSaltSync(10);
// console.log(salt);
// const hash = bcrypt.hashSync(password, salt);
// console.log(hash);
// // PLAINTEXT -------------> HASH A PASSWORD ---------> CHECK THE HASH

// const tryToLoginPassword = 'password';

// // Please do not take the attempted password, hash it, and check if 2 hashes matches using == or ===
// const result = bcrypt.compareSync(tryToLoginPassword, hash);

// console.log(result);

///////////////////////////////// ASYNC /////////////////////////////

console.log("this is async");

const pass = '1234';
bcrypt.genSalt(10).then(salt => {
  console.log(salt);
  return bcrypt.hash(pass, salt);
}).then(hash => {
  console.log(hash);
})


