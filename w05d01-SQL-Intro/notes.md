--- W5D1 ----

 - SQL intro (databases in general)
 - Why SQL  ( what is the point?)
 - psql ( and different commands that we can do)
 - We will look into inserts/seeds
 - first query 
 BREAK 
 - more queries 
 - BONUS -- IDE for Databases 

### Theory

## --------------- The Story of You and TinyApp --------------------- #

- you have finished tinyapp!
- you have gotten it marked, you passed it!
- you decided to deploy it
- TINY APP HAS BLEW UP IN POPULARITY !!!!!!!!!!!!!!!!!!!!!!!!!!!
- $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
- bye bootcamp!, going go buy island!
- 2 months pass, and we see a drop in users :(
- users want more features 
- take your laptop, and you start coding your features!
-- DARK MODE!!!!
-- analytics
-- admin/ number of users
-- admin/ most popular URL
-- friend groups/groups  

- you need to deploy, these features.....
- you will push your features to github, some automation will happen,  prod server
---- THE SERVER WILL RESTART TO TAKE THE NEW CHANGES x_x

### We destroy the codebase of TinyApp

-- you can rebuild it BETTER

### If you lose your data..... you app is dead forever... :(


### Data Persistence ###

I want to be able to turn off my server, and turn it on, and have all my users, urls, etc. still be there...

Lets use a file (.txt) to store users, and urls, and anything else we wish to keep persisted.

How would we start storing data?

we can use `csv` format!!


Maybe our database file shouldnt even be on the same computer (server) as your server for tinyApp !


|tinyappy server|     <------------->     |database.txt server|

*You* will need to build server interaction, between 2 servers

`express` server, /save {}


## Databases (Relational)

- place where you can keep, organize, retrieve, data (service)

- PSQL Postgresql

-- The tools (how to, create, store, organize, access this data)

-- PSQL
-- Oracle
-- mysql
-- CouchDB
-- MongoDB
-- MariaDB
-- CassandraDB
-- etc

### PSQL (Postgres!)

```sh
psql  # to get into postgres
psql -h localhost -U labber -d w05d01 # to specifically connect as a different user!
\q    # to quit out of postgres
\l    # to see all database on the system
\du   # to see all the users that have access to your postgres
\c _database_name # to connect to a specific database
\dt   # display all the tables in the database
\i    # run the sql commands in the file given
```

## SQL

a language to interact with the data inside of your database <-- YOU WILL USE THIS FROM TODAY UNTIL THE END OF BOOTCAMP

### Create a database;

```sql
CREATE DATABASE _database_name;
```


```sql
DROP DATABASE _database_name; # SCARY COMMAND!
```


### To create a table 

INTEGER
TEXT
VARCHAR
TIMESTAMP
DATE
BOOLEAN


```sql
CREATE TABLE table_name (
  column_name column_type,
  column_name column_type,
  column_name column_type,
  column_name column_type,
  ...
)
```

```sql

CREATE TABLE fruits (
  name VARCHAR(50),
  seeded BOOLEAN
);
```


### To add infomation into the tables 

```sql
INSERT INTO table_name (column_name, column_name, column_name,) VALUES (val1, val2);
```


```sql
INSERT INTO fruits (name, seeded) VALUES ('apple', true);
```

```sql
UPDATE table_name
SET column_name = val1,
column_name1 = val2,
column_name2 = val3,

WHERE condition

```


### GRABBING DATA OUT for us to See!

```sql
SELECT column_name, column_name, etc FROM table_name; 
```
