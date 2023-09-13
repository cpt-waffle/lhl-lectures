# ------------------- AGENDA ---------------------

- Theory of client side rendering
- AJAX (What is it and why)
- Building an App with an API 


### Server Side Rendering!

- TinyApp


Client ------------------------- REQ --------------------------->  SERVER
                                                               does logic 
<------------------------------- RES ----------------------------

EJS  (templateVars)
Just before the server sends the page out, it builds it in HTML
<%= %>
<% %>

The server had to build the HTML page...

the browser only understands

- HTML
- JS
- CSS

### Client Side Rendering

The server still sends out HTML, JS, CSS but only a bare minimum


The client may ask for more data, then the server gives it that data, and the client adds the data 
to the page by themselves

With client side rendering, the server has less processing to do.

for the client its beneficial because less data needs to be re-loaded, making it faster

### Ajax was created/thought of by Microsoft



#### Disclaimer

the AJAX request, is actually pretty easy to do,

BUT

doing all the work to make the data appear, is hard...
