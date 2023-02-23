// BcryptJS Practice

const bcrypt = require('bcryptjs');

const plainTextPassword = '123';

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(plainTextPassword, salt);
console.log(salt);
console.log(hash);
// hashing is a 1 WAY process
// plainTextPass ------> hashSync ----> 943u5t09sjfg3j45024u09wsfj09052045254234

// if (hash === req.body.pass) X not going to work :(
console.log(bcrypt.compareSync('1234', hash));
console.log(bcrypt.compareSync('iSecretlylove50cent', hash));

/////////////// Async
console.log("--------------------Async ");

const plainTextPass2 = '!!!W3l123_45com3!!!';
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(plainTextPass2, salt, (err, hash) => {
    console.log(hash);
  })
})

