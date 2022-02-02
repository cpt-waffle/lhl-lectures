# ------------------- AGENDA ---------------------

- AJAX (What is it and why)
- Building an App with an API 

## -------- To learn about 

- how to use AJAX to work with single page app or a hybrid app

TinyApp 
Give me the webpage, and CSS, JS 
Server  <------------------------------> Client


Tweeter 
on load, get everything
on a specific action (click,scroll, hover) get more data <--- AJAX
 SPA ( Single Page Application )


AJAX
 - To ask the server for data
 req/res 
 - no reloading the page.... ( don't need ask for extra )

Microsoft
 Ask data from the server, without any refresh
 and make the clients PC/Computer/Device do the heavy lifting of rendering

 Food Application
 - finding out the recipies 

Show memes on the page
- reddit has an api


## How do we use THESE API's ?

- how do we get data from server to client ?
- what tool do we use?

fetch() / $.get $.ajax / axios 

```js
fetch('https://api.tvmaze.com/search/shows?q=tiger')
  .then(response => response.json())
  .then(data => console.log(data));
```

