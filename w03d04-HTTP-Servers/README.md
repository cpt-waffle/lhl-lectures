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
