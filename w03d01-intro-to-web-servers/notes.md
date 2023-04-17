## -------------- Agenda --------------

- Web Servers (Theory part)
- Request <----> Response
- NodeJS Server
- ExpressJS
- GET Requests
- EJS
- server side rendering (dynamic pages)

- BONUS

- POST requests
- saving data to your server


### TCP

Client                                     Server
------------------connect --------------------
--------------connection established ---------
---------------------- message ------------->
---------------------- message ------------->
<--------------------- message --------------
---------------------- message ------------->
---------------------- message ------------->
---------------------- message ------------->
<--------------------- message --------------
<--------------------- message --------------
<--------------------- message --------------

### HTTP

Client                                    Server
----------------- connect --------------------
-----------------connection established ------
--------------------REQUEST MESSSAGE -------->
                  - GET
                  - POST
                  - url
                  - headers
                   ^- information about your browser
<-------------------RESPONSE MESSAGE ---------
                  - data/body
                  - status code
                  

------------------- disconnect ---------------
