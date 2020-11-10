#### CRUD with Express

Hello and today we have went through building a server in `express` with CRUD.
As you have already seen express is like the wild west, where anything can go.

```js

app.get('/showMeSomeMemes', (req,res) => {
  //....
})
```

You can make ANY route name you can possibly think off. The problem is that just because you can, doesnt mean you should do this. For this we have a certain conventon we follow.

#### CRUD

Create, read, update and delete

#### Routes

A route is made up of a `VERB` and a `PATH`.

Verbs: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`

However we will be using only `GET` and `POST` to achive the same   

#### REST

`REST` means that the path that we are going to should represent the data being transferred. An API that uses the `REST` convention is said to be RESTful.

"RESTful routes provides a design pattern that allows for easy data manipulation. It's nicer for users and nicer for developers to have everything consistent. A RESTful route is a route that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete)." - [Google Search for Why Restful Routing](https://learn.co/lessons/sinatra-restful-routes-readme#:~:text=RESTful%20routes%20provides%20a%20design,read%2C%20update%2C%20delete).)


Let say we need to make all `CRUD` routes, for `memes`.

```js
app.get('/memes', (req,res) => {
  //GET ALL THE MEMES
})
app.get('/memes/new', (req,res) => {
  //GET A FORM TO CREATE A NEW MEME
})

app.post('/memes', (req,res) => {
  // TAKE THE INFORMATION FROM A FORM
  // AND SAVE IT ( POST saves )
})

app.get('/memes/:id', (req,res) => {
  //SHOW A SPECIFIC MEME
})

app.post('/memes/:id', (req,res) => {
  //EDIT and SAVE the SEPCIFIC MEME
})


app.post('/memes/:id/delete', (req,res) => {
  //DELETE A SPECIFIC MEME
})
```

#### Cookies 

We did a quick look on cookies.

"n HTTP cookie is a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. Cookies were designed to be a reliable mechanism for websites to remember stateful information or to record the user's browsing activity." - `WikiPedia`

#### Middleware

Middleware is a subset of chained functions called by the Express js routing layer before the user-defined handler is invoked. Middleware functions have full access to the request and response objects and can modify either of them.

Basic of explanation is, you plug your middleware into your express, and it happens when any (or specific) request has come from the client.

#### Useful Middleware

[Morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js

[Nodemon](https://www.npmjs.com/package/nodemon?activeTab=readme) - Restarts the node application when file changes in the directory are detected.

[Body-parser](https://www.npmjs.com/package/body-parser) - Parse incoming request bodies in a middleware before your handlers, available under the `req.body` property

[Method-override](https://www.npmjs.com/package/method-override) - can over write, `req-method`, can add `UPDATE`, and `DELETE` requests to be handled.


##### How do we do cookies in express ( BONUS )

In express we have built in function to set cookies,

```js
res.cookie('username', req.body.email); // sets a cookie username, with value from req.body.email
```
The cookie will live on the client's browser until expiring, or until user clears its cookies. Remember even if the server turns off and on the cookie will still be on clients browser.

To check your cookies go into Chrome Dev tools --> `Application` --> `Storage` ---> `Cookies` ---> `localhost` or any other website.

You can edit and delete cookies there as well which makes this tool very powerful!!

##### How do we parse Cookies when a client request comes in ( BONUS )

We can write our own parser, that parses the headers, but that would be too much work. So there is a middleware from `npm` called `cookie-parser`

```js
const cookieParser = require('cookie-parser');
///.... code


app.use(cookieParser());
//-- more code with routes

req.cookies // has all cookies 
```

