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


#### REST

`REST` means that the path that we are going to should represent the data being transferred. An API that uses the `REST` convention is said to be RESTful.


Let say we need to make all `CRUD` routes, for `memes`.

```js
// B
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

#### Middleware

Middleware is a subset of chained functions called by the Express js routing layer before the user-defined handler is invoked. Middleware functions have full access to the request and response objects and can modify either of them.

Basic of explanation is, you plug your middleware into your express, and it happens when any (or specific) request has come from the client.

#### Useful Middleware

[Morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js

[Nodemon](https://www.npmjs.com/package/nodemon?activeTab=readme) - Restarts the node application when file changes in the directory are detected.

[Body-parser](https://www.npmjs.com/package/body-parser) - Parse incoming request bodies in a middleware before your handlers, available under the `req.body` property

[Method-override](https://www.npmjs.com/package/method-override) - can over write, `req-method`, can add `UPDATE`, and `DELETE` requests to be handled.