### W3D1 - INTRO TO SERVERS

#### ( SHOUTOUT TO Nima for Lecture notes !!!! )

Today's code and notes available at: https://github.com/NimaBoscarino/amon-amarth

More notes available at: https://github.com/NimaBoscarino/web-server-notes

Note: I keep all of my lecture material on Github, under a big repo: https://github.com/NimaBoscarino/LighthouseLabs/

The notes that we wrote in class can be found in the `notes.md` file.

1. [Express: Getting Started](https://expressjs.com/en/starter/installing.html)
2. [Routing with Express.js](https://expressjs.com/en/guide/routing.html)
3. [EJS templating](http://ejs.co/)
4. [What is Express Middleware?](https://expressjs.com/en/guide/using-middleware.html)
5. [How do I write middleware?](https://expressjs.com/en/guide/writing-middleware.html)
6. [Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
7. [Using EJS with Express](https://github.com/mde/ejs/wiki/Using-EJS-with-Express)

## WEB SERVERS:

To review, we went over what it means for HTTP to be a "stateless" protocol. This means that everything needed for the server to identify the client needs to be passed along with every request. You'll explore this idea later this week!

My way of boiling down HTTP:

1 person asks - client
Another person responds - server

Remember that HTTP is a resource based protocol. So when you make HTTP requests keep in mind that the requests are always _for something_.

HTTP is a state-less protocol
  - no ongoing communication
  - ask for thing, get thing, end transmission
  - everything that the server needs to form a response needs to be sent with the request
  - how do we pack useful info into the request and then how does the server read that useful info?

Over the course of the lecture I made heavy use of a tool called Postman. This is basically cURL, but with a nice GUI.

## HTTP Servers

In lecture we played around with the HTTP module that Node provides, and saw that creating specific routes is a huge pain. For examples, look in the `http-test` folder at the `server.js` file. So we choose a framework that abstracts those problems away for us. Enter... Express!

## Express

Express is good for:
1) Routing
    - "I'm trying to find a resource... it kind of looks like this..."
    - Pattern matching of routes + resources
2) Middleware
    - anything that needs to happen between the request and the response
    - e.g. parsing form data into easier-to-use formats

With Express we saw that it's fairly simple to set up new routes. We can even set up general **patterns** for routes that Express will use to *match* to requests. For example...

```js
app.get('/people/:id', function(req, res) {
    let id = req.params.id // I can get his parameter
    let person = // ... find user by id ...
    res.json({person: person}) // or some other response
})
```

Look in `express_demo` for some examples of different routes.

## Middleware

Towards the end of the lecture I mentioned something called `middleware`. Middleware means "any code that you want to run between the request and the response". Check the links at the top of the notes for some good resources on middleware. If you look in the code that we wrote, there's a small example of some custom middleware (`app.use...`).

I also mentioned something called Morgan. Morgan is one example of middleware that you can `npm install` and use in your project. It's used to log every request. I recommend installing it for your TinyApp project.

## Views with EJS

Often we'll want our web servers to return HTML pages containing that might have been pulled from a database, another API, etc. In these cases, we'd like to have a **"template"** system that lets us specify the general form of certain web pages (e.g. a profile page) which we can fill in with the required data.

Let's consider a Wikipedia article page. This page requires data (title, images, etc.), and our template engine will combine the data and the template to generate a nice HTML page to serve to the browser.

    TEMPLATE ENGINE:
        ---> Give me data
        ---> Fill in the template with
            - title
            - images
            - authors
            - edit status (e.g. locked, open)
        ---> RETURNS AN HTML FILE EVENTUALLY

The template engine we're using is EJS. EJS lets us embed arbitrary Javascript expressions, and it also lets up easily pass in template variables into the render function. Take a look at the `views` folder in the `express_demo` project to see examples of using EJS.

Here's a bit of a cheat sheet:

```
<h1><%= hello %></h1>

<% for (let i = 0; i < 10; i++) { %>
    <h1>WOOP WOOP</h1>
<% } %>
```

## Aside:

Someone in a previous lecture asked a great question about how to make HTTP requests "on click" from the browser. That will be the topic of an entire lecture this week. For now, I'll leave this little snippet of code here. I don't recommend reading into this just yet, as you'll have plenty of time with this through assignments this week.

```html
<form action="/dogs" method="POST">
  <input type="text" name="something">
  <button type="submit">Submit Form</button>
</form>
```

Enjoy!