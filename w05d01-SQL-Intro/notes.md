--- W5D1 ----

 - SQL intro
 - Why SQL  ( what is the point?)
 - psql ( and different commands that we can do)
 - first query 
 BREAK 
 - more queries 
 - more db talks 


--- BACK IN TIME -----

TinyApp - short URLs

^--- lets you favorite a short/long URL 

^---- deploy the feature, and the server restarts......
urlsDatabase = {...}
usersDatabase = {...}

Is the app truly dead when you destroy the server and frontend of it?
^--- not really...

---------------------------------------------------
files....
fs.write()....
.txt <---
|name,   | email, |  password
|vasiliy, v@k.ca,  12345
|Jessie   j@k.ca   54321

---------------------------------------------------

in order to have read/write privilages to a file, it needs to be stored
on THIS machine.

- make a service, that keeps the data organized in its own container...
- we'll give it tools to connect to that data(base)
- AND you dont have to be on the same machine...
- data persistance
---- sql services, psql
- SQL
-- structured query language ---

==== 

psql -- it connected me to my psql service
\q  <--- exit out psql
\du <--- display users

DATA will catogorized by a DATABASE

CREATE DATABASE database_name;

\c  <--- connect database_name
\dt <--- display tables


=== ERDs  and Data itself

Entity 
Relationship
Diagrams


