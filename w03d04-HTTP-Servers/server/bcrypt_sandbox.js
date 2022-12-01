// Bcrypt practice

const bcrypt = require('bcryptjs');

// console.log(bcrypt);

const plaintextPass = 'secret';

// // time, and making info worth it?
const salt = bcrypt.genSaltSync(10);
console.log(salt);

// // what is a salt?
const hash = bcrypt.hashSync(plaintextPass, salt);
console.log(hash);

const result = bcrypt.compareSync('test', hash);

console.log(result);


// bcrypt.genSalt(10, (err, salt) => {
//   console.log("salt!", salt);
//   bcrypt.hash('1234', salt, (err, hash) => {
//     console.log('1234', hash);
//   })
// })


// console.log("start");
// bcrypt.genSalt(10).then(salt => {
//   return bcrypt.hash('secret', salt)
// }).then(hash => {
//   console.log("HASH", hash);
// });

console.log('end');



