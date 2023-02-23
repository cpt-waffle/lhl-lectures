# ---------------- AGENDA ---------------

Security :)

- hashing passwords
- bcryptJS (bcrypt)
- middleware (bonus)
- encrypted cookies (cookie-session)
- HTTPS
- REST
- cleanup of server.js


## Security Part 1

### Passwords

NEVER EVER EVER keep passwords as plain text passwords,
they can be read by anyone, they can be stolen and re-used in other apps
people don't really changer their passwords.

### Hashing

plaintext ----------> algoThatHashes(plainText) -------->hash3w450jse0fj0j450sjfopi5jo3toe6dfgdg

Hashing is *one way* process

To De-Hash a password, a hacker needs to try out different passwords
until the hash matches the other hash

password123!

### to Encrypt

```js
const plaintextPass = 'secret';

// // time, and making info worth it?
const salt = bcrypt.genSaltSync(10);
console.log(salt);

// // what is a salt?
const hash = bcrypt.hashSync(plaintextPass, salt);
console.log(hash);
```

####  to check plain text with encrypted

```js

const result = bcrypt.compareSync('test', hash);

console.log(result); // true or false?
```

## Cookies/Encryption

Hashing is a one way process, but we need cookie values, so we can't simply hash and never get back the original value again.

### Encryption

* two way process
VALUE ----------> ENCRYPT ----------> 043-90p9sgfjiop6
043-90p9sgfjiop6->DECRYPT ----------> VALUE