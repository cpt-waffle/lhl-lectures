// one way process

// PLAIN TEXT PASSWORD ===> hashing algorithm ===> sdhnfsurfhj98235yuiow8rhfsf93w

// SALT 


const bcrypt = require("bcryptjs");

// console.log(bcrypt);


const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('123', salt);


console.log(hash);

