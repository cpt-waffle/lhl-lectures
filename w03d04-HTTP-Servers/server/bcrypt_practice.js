const bcrypt = require('bcryptjs');


console.log("----------------- SYNC Bcrypt Practice  ------------------");
// console.log(bcrypt);
// generating salt
console.log("this is for -------------------------");
const salt = bcrypt.genSaltSync(10);
console.log("Salt:    ", salt);
const hash = bcrypt.hashSync('123', salt);
console.log("Hash:    ", hash);
const password = '123456';
const matches = bcrypt.compareSync(password, hash);
console.log("does the password match the hash?    ", matches);
// console.log("this is for 12345 AGAIN -------------------------");
// const salt1 = bcrypt.genSaltSync(10);
// console.log("Salt:    ", salt1);
// const hash1 = bcrypt.hashSync('12345', salt1);
// console.log("Hash:    ", hash1);

console.log('-----------------------------------------------------------');

// bcrypt.genSalt(10, (err, salt) => {
//   console.log("callback finished!");
//   console.log(salt);
//   bcrypt.hash('12345', salt, (err, hash) => {
//     console.log("callback for hash is finished!");
//     console.log('hash:', hash);
//   })
// })

// bcrypt.genSalt(10).then(salt => {
//   console.log("promise has finished for salt");
//   console.log(salt);
//   return bcrypt.hash('1234', salt);
// }).then(hash => {
//   console.log("hash promise is done", hash);
// })