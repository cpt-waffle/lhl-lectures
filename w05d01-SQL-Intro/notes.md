--- W5D1 ----

 - SQL intro (databases in general)
 - Why SQL  ( what is the point?)
 - psql ( and different commands that we can do)
 - We will look into inserts/seeds
 - first query 
 BREAK 
 - more queries 
 - more db talks 

------------------------

W4 - TinyApp!!!!

- urls
- users
- users can create urls
- users can create an account

---------- TinyApp got leaked
TinyApp is the biggest app out there

Hosted it
16+ million users
$$$$$$$$$$$$$

people want features
 - dark mode
 - organizations
 - public/private urls

--- PUSH YOUR NEW FEATURES TO THE HOSTED WEBSITE

- server will restart

--- the data lived on the server while it was running....

IN THE CURRENT VER OF TINY APP
DATA DOES NOT PERSIST (AFTER RESTART)

--- Tinyapp 
-- Hacker Group <---- NodeJS server Destroyed, Views Destroyed, BUT DATA IS FINE
   <---- Data is Destroyed.....


Tinyapp Needs to persist data --> (When server goes offline, data is still kept alive somewhere)

How Can we Keep Data?

lets make a file (.txt) and fsWrite into that file all that data.

.csv

```
users
id,email,password


---------- Seperation of Concerns ------------------------

We need move the file to another machine, (AWS)
Can We write to a file thats on a different machine?
fs.write()? NO

-- connect to this machine 
-- and have controlls to add to the file, or remove from that file ( server/service )


------- DATABASES

its a service that is able to persist data.
It has controlls to connect/add/remove/organize the data
( the language of the database )
can be accessed by multiple of people for a extented period of time !!!

Databases can be on a different server 

------------------- 

Relational Database 
postgres
postgresql

to connected to postgresql
you will write in terminal `psql`

to exit
\q

- The service for postgres can be opened while you are in ANY FOLDER on your computer

DATABASES 
TinyApp <--SHARING---> Facebook
\l <--- LIST all the databases

To connect to a database ( SPEFICICALLY )
\c DATABASE_NAME

psql -d DATABASE_NAME <--- To specifically connect to a database from terminal

to look into the database and see all of the "tables"
\dt
/////////////////////////////////////////////////////
to DELETE a database
DROP DATABASE database_name;

Create a database

CREATE DATABASE database_name;


Create a table

CREATE TABLE Table_name (
  row_name1 row_type,

)

CREATE TABLE fruits (
  name varchar(255),
  favorite boolean
);

// inserts 
INSERT INTO table_name (row_nam1, row_name2)
VALUES (val1, val2);

INSERT INTO fruits (name, favorite)
VALUES ('kiwi', true);

DELETE 

DELETE FROM table_name
WHERE condition

PSQL is case insensitive

\i <---- to run a specific file in your postgres
NOTE: be close the the file so you dont have to write the absolute path to it