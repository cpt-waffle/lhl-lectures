## Client Side JavaScript & jQuery

[Repo Link](https://github.com/vasiliy-klimkin/w04d02-jquery)

For the last week you were working on an app called `TinyApp`. It was an app that would store urls and shorten them for people to reuse. The biggest that was missing in it was the asthetic and feel. The app felt a tad bit `1999-2002` .

### Introducing Javascript ( on the front end )

From the start until now you have been using something called `node`, which is a javascript engine which runs on the `backend`. You were able to make a server that serves up HTML files.

Just like your machine that has node, a javascript engine ( not always the
same one ), your `browser` has on as well. Infact all browsers (Chrome,
Firefox, Edge, Safari, etc) has a built in javascript engine to interpret js
that is embedded in a HTML page.

On the server, our `node` had access to something called `process.argv` and other `process` functions. It does not make sense to have this on the front-end due to the fact that the scripts that will be ran on will not need access or need the access to the file paths, argumets, and what not. We do have access to new things like `document` and other intersting things. Generally speaking, when writting `Javascript` on the front end, the context changes, which gives you access to alot of different global variables that you did not have access when writting it on the backend.

#### Cool Functions on the Frontend

`window`

`window.open()`

`window.history.back()`

`navigator.getBattery().then((b) => console.log(b));`

`navigator.geolocation.getCurrentPosition(res => console.log(res))`

### DOM -  (Document Object Model)

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)


DOM is like a tree structure of your HTML elements. The DOM lets us traverse through this tree structure to easily find specific nodes ( and when we say nodes we are talking about the `p`, `div`, `title`, `article`, `h2`, etc... tags)

![](https://www.w3schools.com/js/pic_htmltree.gif)

#### Dom EVents

- An event is a notification that some action has occurred (eg. a button is clicked, the mouse pointer is moved, a key is pressed)
 - We can attach code (usually in the form of a `callback`function) to run when a specific event occurs... we call this "attaching an event listener"


```js
// we can use anonymous functions...
document
  .querySelector('button')
  .addEventListener('click', (event) => {
  // do something
  });

// or named functions
const eventHandler = function (event) {
  // do something
};
document
  .querySelector('button')
  .addEventListener('click', eventHandler);
```

#### Examples

```
document.getElementById('2')
document.getElementsByClassName('cats')
document.querySelector('ul li')
document.querySelectorAll('ul li')

.addEventListener('click', () => alert('clicked'))
```

### Intro to Jquery ( What is it? Why?)

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript. (From [jquery site](https://jquery.com/))

### Thats great but why?

JQuery gives us alot of helper functions that would be alittle bit tedious to write in plain `js`.

It is also cross compatable between multiple browsers. ( Big One )

The most interesting part about `JQuery` that it does not anything extra to the ordinary JS other than syntatic sugar and cross browser support.

#### Some Examples

I want all p tags in this entire page

`$('p')`

Get me the value of the id `first_name`

`$('#first_name').val()`

Set the first name to Captain Waffle

`$('#first_name').val('Captain Waffle')`


#### DEMO

We built a quick profile renderer, It takes an array of objects, makes them into HTML and renders them on the page. We used jquery `append()` and template literals to create specific elements.
