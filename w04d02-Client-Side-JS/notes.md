### Agenda for Today ###

---- Client Side Javascript ----

- talk about JS in your browser, rather than on your server (front vs back)
- look into front-end js 
- build an example on vanilla JS
- JQUERY
- example with JQUERY



###  TinyApp

Server Side Rendering

Server builds the views for the client -------------------------------> sends to client ------->


EJS ----- cannot be read by browser ----> HTML


Your browser only understands 3 things

HTML -- your data being displayed in markup
CSS  -- make your HTML look "nice" 
JS   -- make actions, event listeners, animation slides, etc

### Tweeter

Most of it is client side rendered  

JS on the client side 
-- actions
-- event listners

### How does Node(backend) differ from JS(frontend) ?




// TinyApp

app.get('/')
app.get('/urls')
etc


#### To Controll when you should run your js files

- you can move your js file at the end of <body>
- you can use defer at the end of <script>
- you can add an event listener to wait until the HTML document has been loaded