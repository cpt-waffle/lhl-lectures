const bcrypt = require('bcryptjs');

const password = '1234';

const salt = bcrypt.genSaltSync();
console.log('salt:      ', salt);
const hashedPassword = bcrypt.hashSync(password, salt);

console.log('password:  ', hashedPassword);

// form-info

const formPassword = 'helloWorld';

const result = bcrypt.compareSync(formPassword, hashedPassword);

console.log(result);
