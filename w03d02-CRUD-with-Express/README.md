#### CRUD with Express

Hello and today we have went through building a server in `express` with CRUD.
As you have already seen express is like the wild west, where anything can go.

```js

app.get('/showMeSomeMemes', (req,res) => {
  //....
})
```

You can make ANY route name you can possibly think off. The problem is that just because you can, doesnt mean you should do this. For this we have a certain conventon we follow.

#### CRUD/Bread

Create  - create a new resource
Read    - retrieve a particular
Update  - edit/update a resource
Delete  - delete a resource


Browse - retrieve all of a resource
Read   - retrieve a particular
Edit   - edit a resource
Add    - create a new resource
Delete - delete a resource

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

