#### W3D4 - Real World HTTP Server

Today we did a good review of HTTP, servers, and express.

#### Review - HTTP What is it?

![http_diagram](https://m.iotone.com/files/term/hypertext-transfer-protocol--http-_1.jpg)

__HTTP__ stands for Hyper Text Transfer Protocol. WWW is about communication between web clients and servers. Remember, request, and response. Nothing can be send back unless there was a request made.

#### Review - Express

ExpressJS is a framework that lets us create a web server that is able to receive `requests` and respond back with `responses`. When the recieve a request it can either:

- go straight to the specific route
- get intercepted by middleware


#### Middleware

![middleware](https://d33wubrfki0l68.cloudfront.net/a22bb45df146d43b57f2f6c90182d19e7394cd96/d6e10/assets-jekyll/blog/express-middleware-examples/middleware-30b3b30ad54e21d8281719042860f3edd9fb1f40f93150233a08165d908f4631.png)

Middleware is an action/operation that may happen between the request and the response. Right when the the request comes, it can go through some middleware for either massaging the data to be easier to access ( `cookie-parser`, `body-parser`) or maybe it records users visited.

Example of a middleware:

```js
app.use((req, res, next) => {
  //things go here!
  next();
});
```

You are familuar with `req` and `res`, but now its time to itroduce `next`. `Next` is a callback function that will send the response to the next middleware or to the route it was supposed to hit. Without it, the app will simply hang because we have hijacked the entire workflow of express.


Example of middleware only on some specific routes

```js
app.use('/urls', function (req, res, next) {
  if (req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
});
```

##### Middlewares that are Available to use:

- cookie-parser
- body-parser
- morgan
- alot of other stuff on `npm`......

#### Routing

So far we have been writting all of our routes in one file ( which became around 200 - 500 lines of code which can be alot to look through when tryingto debug). In the express servers in the wild what we do is, we route split based on `namespace`

Example of this:

__server.js__
```js
const urlsRoutes = require('./routes/urls');//import the route file
app.use('/urls', urlsRoutes())//use this for for all /urls namespace;

```

__urls.js__
```js
const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
  });


  return router;
}
```


#### Restful Routing

```
|   NAME   |     PATH        |   HTTP VERB     |            PURPOSE                   |
|----------|-----------------|-----------------|--------------------------------------|
| Index    | /blogs          |      GET        | Displays all blog post               |
| New      | /blogs/new      |      GET        | Shows new form for new blog entry    |
| Create   | /blogs          |      POST       | Creates a new blog post              |
| Show     | /blogs/:id      |      GET        | Shows one specified blog post        |
| Edit     | /blogs/:id/edit |      GET        | Shows edit form for one blog post    |
| Update   | /blogs/:id      |      PUT        | Updates a particular blog post       |
| Destroy  | /blogs/:id      |      DELETE     | Deletes a particular blog post       |
```

There Are 7 different RESTful routing patterns to follow as shown in the table above.

We Start with a user story:

As a user I want to be able to see all the blogs.
As a user I want to be able to create and edit a blog.
As a user I want to be able to show and delete a specific blog.

From here, we can pick out our noun(s) that could be used as resources. The only one we can see is `blogs`

Now we map the noun with an HTTP verb

GET `blogs`
POST `blogs`
GET `blogs/new`
GET `blogs/:id`

This does alittle bit of time to get used to, but once you get the hang of it, it makes creating and picking your routes MUCH MUCH easier


### BONUS: Writting our own Middleware for `body-parcer` and `cookie-parser`

Common misconception that we do not need body-parcer or cookie-parcer because we can do it ourselves (For learning purposes only!!!! Using the `npm` packages is alot better and you dont need to waste time re-inventingthe wheel)

```js
// THIS IS BODY PARCER IN A NUT SHELL!!!
app.use((req, res, next) => {
  const body = [];
  req.on('data', (chunk) => body.push(chunk)).on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    const obj = {};
    parsedBody.split('&').forEach( arr => {
      const pair = arr.split('=');
      obj[pair[0]] = pair[1];
    })
    req.body = obj;
    next();
  })
});
```



```js
// THIS IS COOKIE PARSER IN A NUT SHELL!!!!
app.use((req,res,next) => {
  const cookies = req.headers.cookie.split('; ');
  const obj = {};
  cookies.forEach(cookie => {
    const keyVal = cookie.split('=');
    obj[keyVal[0]] = keyVal[1];
  })
  req.cookies = obj;
  next();
})
```