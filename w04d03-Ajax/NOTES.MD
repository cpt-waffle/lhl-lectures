# ------------------- AGENDA ---------------------

- Theory of client side rendering
- AJAX (What is it and why)
- Building an App with an API 


### Client and Server Side Rendering


TinyApp --- server side rendering application

                         GET /URLS
Client ---------------------------REQ-------------------> Server
                                                            urls.ejs <%= %>
                                                            <conversion>
                                                            urls.html
    <-----------------------------RES----------------------


## Client Side Rendering

The server sends out a layout, of HTML, JS, CSS (bare minimum)

once the HTML is finished loading on the client, the JS file will ask for a request from a server,
and the server will deliver JSON object/array to the client

the client will then use the JS file to manually add the JSON object/array to the HTML

### AJAX 

is a way to ask for data, from the server to the client.  The client does not refresh the page. 

Microsoft. 

### Drawbacks 

-- sometimes, the google/bing/search engines, bots may not be able to understand what is your site about




