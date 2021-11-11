##### Security and Real World HTTP Servers

Today we will be talking about real world HTTP servers security.

In the first part we were using regular cookies but we found a big fault.. We can edit the cookies with google chrome dev tools. Which basically means this is absolute insecure...

So we need to figure out a way to keep that private! Enter cookie-session!
Cookie is a way too keep our login sesssions. Since cookies by themselves are completely editable.

For keeping a login we use  `cookie-session`

Which needs to be set up by 

```js
app.use(cookieSession({
    name: 'session',
    keys: ['email']
  }))
```

then we used it in routes to set sessions just like we did 

```js
    // res.cookie('email', user.email);
    req.session.email = user.email;
```



Now the cookies are encrypted. When we looked at our dev tools we could not see what was stored in that cookie. And the name was labled as session.

#### Bcrypt

Imagine you are working with data and handling peoples bank account cards. You store them as STRING. Then someone malicious in your company takes that information and starts charging the users cards. 

This could of all been avoided if we to hash sensative information!

#### What is Hashing?

[wiki](https://en.wikipedia.org/wiki/Cryptographic_hash_function)

#### We should ALWAYS hash passwords!

Password hasing is a MUST in web development. You should never keep passwords as plain text due to malicious attacks that can happen. Potentially anyone can steal a person's cridentials and log in as them

We used `bcrypt` to combat this.

### Bcrypt

https://www.npmjs.com/package/bcrypt

or 

https://www.npmjs.com/package/bcryptjs

To use Bcrypt we can look at the documentation and check that:

We Can hash strings:

with Callbacks

```js
    // plain text   // salt round  // callback
bcrypt.hash('apple', 10, function(err, hash) {
    console.log(hash);
    // $2b$10$Xp.j4xLVc3Ds6aAbdcIyvObpXC.X.VGize284SrHL8JRRol2m3fFW
});
```
with Promises

```js
bcrypt.hash('apple', 10).then(hash => {
  console.log(hash);
  // $2b$10$Xp.j4xLVc3Ds6aAbdcIyvObpXC.X.VGize284SrHL8JRRol2m3fFW
})
```

#### And to Compare

With Callbacks

```js
  bcrypt.compare('apple', result, (isTrue) => {
      console.log("is true", isTrue);
  })
```

With Promises

```js
  bcrypt.compare('apple', result).then( isTrue => {
      console.log("is true", isTrue);
  })
```

So with that we can use it in our code:

```js
app.post('/register', (req,res) => {
  // console.log(req.body);
  bcrypt.hash(req.body.pass, 10, (err, hash) => {
    // res.send(hash);
    const tempUser = {email: req.body.email, password: hash};
    users.push(tempUser);
    res.redirect('/');
  })
})
```

and Login

```js
app.post('/login', (req,res) => {
    console.log(req.body)
    console.log()
    if (req.body.email && req.body.pass) {
        const user = findUser(req.body.email)
        if (user) {
            console.log(' user found--> ',user);
            console.log(' pass entered-->', req.body.pass);
            bcrypt.compare(req.body.pass, user.password, (err, result) => {
                console.log("RESULT!!!!!!!!!");
                console.log(result);
                if (result) {
                    // res.cookie('email', user.email);
                    req.session.email = user.email;
                    res.send('Logged in!');
                } else {
                    res.send("Invalid user/password");
                }
            })
        } else {
            res.send('invalid user!');
        }
    } else {
        res.send('Error: Please enter user/pass');
    }
})
```
