# ---------------- AGENDA ---------------

Security :)

- hashing passwords
- bcryptJS (bcrypt)
- middleware (bonus)
- encrypted cookies (cookie-session)
- HTTPS
- REST


### Passwords

plain text passwords should not be stored, because they can be used maliciously

NEVER STORE PASSWORDS AS STRINGS (OR TEXT)

### Hashing

plain-text-string -------------> algo ---> SALT -------> 2308fujs0jf23j40928ujr08wsu43

hashing is one way ------> 

To dehash a password, a hacker must try out different passwords until the hash matches the other hash.


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


### Encryption

text -----------------------> ENCRYPT ALGO --------> 952jopisfjsrj2rfs90825vik04
952jopisfjsrj2rfs90825vik04 ->ENCRYPT ALGO --------> text


Client(Firefox/Chrome/Safari)

--------LOGIN --------------------------->
<-------GREAT YOU ARE LOGGED IN----------
cookie: 2394psiodkf345kpkfspktp34k5
---------------NEW REQ --------------->
cookie on server: {user_id: 4}

### HTTPS

Computer                                                        Server
-------------------------------REQ-------------------------------->
<--------were incrypting this HTML---- decrypt it with this code --
                              SSL Certificate 

<------------------------------RES---------------------------------
             