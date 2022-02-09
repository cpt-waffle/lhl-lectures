## --------- Agenda ----------

- Databases Conceptual Review
- How to make SQL commands from .js file
- How to make SQL commands from server
- common pitfalls
- How to make functions for helper methods -- (tomorrow's activities)
- Q and A

----------------------------------

Database Review 
---------------

Tinyapp
   ^---- a big billion dollar application

People want more features!!

- analytics <---> how many times have users clicked/used your tinyURL
- dark mode 
- share links
- users accounts
- friends 
- organizations 

-------------------------------

Deployment.....

RESTART <---

DATA IS LOST APP IS DEAD X_X

Data is new resource

___ a way to keep our data persisted __

well we'll will build a file. 

.comma seperated values

user,password


build another web server to write to this file
and read specific items from the file....

SQL -- POSTGRES

DATABASE          user
  <=================



DABASE                  SERVER                         CLIENT
                              <----------REQ------------
   <----------------------
   ----------------------->                     
                              -----------RES----------->


## How to connect to the database via single JS file?

- pg (npm)

TinyApp
       <--------------REQ 
    POOL -------->RES
      <--------------REQ
      <--------------REQ
      <--------------REQ
  CLIENT


