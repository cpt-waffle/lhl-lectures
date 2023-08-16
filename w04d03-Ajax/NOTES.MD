# ------------------- AGENDA ---------------------

- Theory of client side rendering
- AJAX (What is it and why)
- Building an App with an API 

### TinyApp 

Server Side Rendering 



Client -----------------REQ----------------------->Server
                                                 Does Some Logic
                                                 Finds the corresponding EJS
                                                 IT CONVERTS TO HTML
  <---------------------RES------------------------

  Your Browser only understands 3 types of files

  - HTML
  - JS
  - CSS

  Server needs to REBUILD the EJS code ( compiling it ) into an HTML document
  Grab the CSS files and upload em
  Send of JS files ( for the front-end )

  ### Client Side Rendering

  The Server still sends out HTML, JS, CSS
  but the initial HTML file, is just a template
  Once that page has been loaded by the client,
  The client will then ask for more information from server
  when the data comes back, its up to the client to populate that data on the 
  HTML page/file

### Ajax was created/thought of by Microsoft

client asks the server for data, BUT the browser does not refresh
when client gets the data, it will use some javascript code, to populate it on 
the given web-page

- GET
- POST
- PUT
- PATCH
- DELETE
