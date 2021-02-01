--- W5D1 ----

 - SQL intro
 - Why SQL  ( what is the point?)
 - psql ( and different commands that we can do)
 - first query 
 BREAK 
 - more queries 
 - more db talks 

------------------------

TinyApp

7 million users!!
production server is hosted on the best server ever (NASA)

- features like
- friends list
- likes/dislikes
- twitter integration
- analyctics

finsihed all the features
and then you push to production
. . . . .
kill the server
npm install
star the server

- app restarts -
You LOST ALL OF YOUR 5 MILLION USERS


Use a File to store people, and other data?

// fs = require('fs');
 seperation of concerns

now we gotta write controls for fs
so that it can connect to another machine
read a file from that machine , write info to that machine, 

username, password, first_name
v@k.ca  , 12345678, Vasiliy



^---- Databases
        ^-----------  SQL


PSQL Postgresql <-- a service, that is a database
PSQL runs on PORT 5432


PSQL is global service -- meaning the program is accesbale anywhere 
on your machine...

you can connect to postgres virtually ANYWHERE on your machine


PSQL Commands

from machine we can write `psql` to connect to the database service
from the `psql` connection we can write `\q` to exit out of it.

psql can have many databases

`\l` <---- LIST ME ALL THE DATABASES ON THIS SYSTEM
`\c _DATABASE_NAME_` <-- CONNECT TO THE DATABASE SPECIFIED
`\dt` <--------- DISPLAY TABLES

--- CREATING A DATABASE ---

`CREATE DATABASE _DATABASE_NAME_` <-- create db

--- DELETING A DATABASE ---

`DROP DATABASE _DATABASE_NAME_`   <-- delete db