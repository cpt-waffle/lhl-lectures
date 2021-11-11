console.log('bcrypt demo!!');
const bcrypt = require('bcrypt');
const password = `iSecretlyLove50cent`;

// Callback way!!!
bcrypt.hash(password, 10, (err, hash) => {
    console.log(err);
    console.log(hash);
    bcrypt.compare('iSecretlyLove50cent', hash, (err, result) => {
        console.log(result);
    })
    // we have to de-hash the word and then check if word === password
})

// Promise Way!!
bcrypt.hash(password, 10).then((hash) => {
    console.log(hash);
})


