const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

console.log(`Salt:  `, salt);

const hash = bcrypt.hashSync('1234', salt);

console.log(`Hash:  `, hash);

// Hashing is a ONE WAY PROCESS


// To check if plain text string matches the hash
console.log(bcrypt.compareSync('hell1', hash));


console.log(bcrypt);

console.log("---------------- Async -----------------");

bcrypt.genSalt(10, (err, salt) => {
  console.log("Async Salt: ", salt);
  bcrypt.hash('hello', salt, (err, hash) => {
    console.log('Async Hash:  ', hash);
  })
})