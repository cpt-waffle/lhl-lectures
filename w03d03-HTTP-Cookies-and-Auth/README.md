### Cookie + (User Authentication & Security)

Today we talked about Cookies and Authentication.


#### Quick Recap

HTTP is *stateless* - the connection between client and server stops once the response has been sent. Next time you ask a server for something, the server doesn't actually know who you are or remember that you asked it for something seconds before.

#### Pros and Cons

This statless protocol works well with request - responses. Meaning that each request is independant from one another.
The less complexity we have per each request, the easier it is to handle more and more requests.

The drawbacks of this
 - impossible to track context
 - can't do realtime data transfer
 - each time have to send context

### Problem
When a user fills out a form, they are able to see their name and password on the main page. Otherwise they see "You are not logged in"

Solution ( terrible one ) -> once they user is logged in, append their cridentials to the url `/info?id=32`

#### But Why is this Bad?

From the developer's standpoint, you will have to customize your pages and routes, in a way that there maight be a query param that distinguishes login, which will be very hard and annoying. If you make `<a/>` links, and forget that you need the query string with user id, user can potentially be logged out.

From a security standpoint, knowing that an `id` is just a number, i can potentially change the number, and be logged in as someone else. We maybe able to change the `id` to something else (like email or maybe some hashed value) , but that still will be not a clean approach. Nobody should be able to see or guess on how we are tracking our logins.

#### Cookies, What are they?!?

Cookies are:

- used to remember information about a "client" (ie browser / user)
- Stored as Key-value pair of data (same key=val format as query string in the URL)
- Stored on/by the client (Browser, etc)
- Readable/Writable by the the server (eg: "Set-Cookie" response header)
- When set on the server, it sends back a Set-Cookie: response header for the browser to then update its cookies
- Each stored cookie is then transmitted by the client to the server with every HTTP request to that same domain (via "Cookie" header)

Basically, we've moved the key=val solution from the URL to the HTTP header. That's all cookies are.
The best part about this, well its gotten alot cleaner than having everything in the URL. The not so great part is that, as you can see, we can still understand what the information stored in the cookie is. So bottom line, its still not secure !!!!!

#### Building a Server a BAD Way!

So for this we used a typical req.query to store our user id and know that we authenticated. This is not a good way at all because anyone who looks at URL can change our `user_id` manually and then login as another user.
```js
// BAD WAY (DO NOT DO THIS) FOR DEMO PURPOSES ONLY
app.post('/login', (req,res) => {
    console.log(req.body);
    const user = findUserByEmail(req.body.email);
    if (user) {
        res.redirect(`/?user_id=${user.id}`);
    } else {
        res.send("FAILED LOGIN");
    }
})
```

#### Building a Server Better(ish) way

Then we decided to use cookies which would help us store the `user_id` in the header BUT that turned out to be not the best way either, because anyone with chrome dev tools can simply change `user_id`.

```js
// STILL NOT A GOOD WAY (Cookies can be changed via dev tools)
app.post('/login', (req,res) => {
    console.log(req.body);
    const user = findUserByEmail(req.body.email);
    if (user) {
        res.cookie('id', user.id);
        res.redirect(`/`);
    } else {
        res.send("FAILED LOGIN");
    }
})
```

#### Security

So far we figured out that cookies arent secure, but they are very useful in tracking login. So what can we use instead of them?
We can use `cookie-session` which is basically a hashed cookie. We quickly looked into how to convert our login into `cookie-session`

```jsx
// now we are secure !! 
app.post('/login', (req,res) => {
    console.log(req.body);
    const user = findUserByEmail(req.body.email);
    if (user) {
        req.session.user_id = user.id; // <-------- GOOD WAY
        res.redirect(`/`);
    } else {
        res.send("FAILED LOGIN");
    }
})
```

We quickly talked about a hashing algorithm/function called bcrypt. I believe it's the most popular option for password hashing.

Instead of storing cleartext passwords, we "hash" them which is essentially "one way encryption" (original data is lost and cannot be retrieved and the hashed value is expected to be unique enough such that no other password value will generate the same unique hashed value).

Whenever a user attempts login, we need to re-hash their login attempt's password and compare the hashed value with the one we have stored from before.
