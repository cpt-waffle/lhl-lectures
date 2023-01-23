## -------------- Agenda --------------

- Web Servers (Theory part)
- Request <----> Response
- NodeJS Server
- ExpressJS
- GET Requests
- EJS
- server side rendering (dynamic pages)


### Servers

TCP Server

- snake game

- address (IP)
- PORT
- attempted to connect

Client                                         Snake Server
---------------------CONNECT--------------------->
                CONNECTION ESTABLISHED
-----------------------MSG----------------------->
-----------------------MSG----------------------->
-----------------------MSG----------------------->
<----------------------REPLY----------------------
-----------------------MSG----------------------->
<----------------------REPLY----------------------
<----------------------REPLY----------------------
<----------------------REPLY----------------------
-----------------------MSG----------------------->
-----------------------MSG----------------------->
-----------------------MSG----------------------->

## HTTP Servers

- need address/port
- you are able to attempt a connection....
 Client                                          Server
---------------------CONNECT--------------------->
                CONNECTION ESTABLISHED
---------------------REQUEST--------------------->
<--------------------RESPONSE---------------------
                   CONNECTION ENDS
  