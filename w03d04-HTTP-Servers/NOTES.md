# ---------------- AGENDA ---------------

Security :)

- hashing passwords
- bcryptJS (bcrypt)
- middleware (bonus)
- encrypted cookies (cookie-session)
- HTTPS
- REST
- cleanup of server.js



## Security!!

keeping plain text passwords is bad!

malicious hackers, can get a hold of our system, and use the credentials to log in
and break stuff

gets sold on the internet, 


### Hashing

* one way process 
* plaintextpassword (password) =>  algo (hashing) => hashsdjf0w5u280395uw809ru809345u89

### Bcrypt

####  to encrypt 

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






