# ------------------- AGENDA ---------------------

- Theory of client side rendering
- AJAX (What is it and why)
- Building an App with an API 


### TinyApp

Server Side Rendered application
^-------- RENDERING

Server                                                      Client
  <------------------------------REQ----------------------------
  run the route (event listner)
  GET /urls
  the logic of that route executes
  res.render('____', templatevars)
  ^--------------- EJS
  Your Browser ONLY understands 3 types of files
  - HTML
  - JS
  - CSS

Rebuild the EJS in HTML (run the logic inside the EJS and embed it)
Grab all the JS files that are needed 
Grab all the CSS files that are needed
-------------------------------RES------------------------------>


### Client Side Rendering 

The Server sends out, an HTML, JS, and CSS
The client makes a request, or mulitple requests to the SERVER for the data
data will be replied back, as a json, or XML
the client recieves that data, and embeds it into the HTML/CSS of the app/website

### Ajax Requests

Microsoft 

client asks the server for data, but the browser does not refresh, 
the client then takes that date and loads it/ uses it for the website

GET and POSTs

## Disclaimer

-- making the AJAX request, is actually easy
BUT alot of setup, behind the scenes work will need to happen to RENDER that data 
that comes in, 