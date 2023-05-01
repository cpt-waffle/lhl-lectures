--- W5D1 ----

 - SQL intro (databases in general)
 - Why SQL  ( what is the point?)
 - psql ( and different commands that we can do)
 - We will look into inserts/seeds
 - first query 
 BREAK 
 - more queries 
 - BONUS -- IDE for Databases 

### The Story of Becoming a Billionare with TinyApp (and losing it :( )

- you have finished tinyapp!
- you have submitted it!
- you looked into dev ops 
- you deployed it just to see how :)
- TINY APP BLEW UP WITH USERS !!!
- #1 twitter, mastadon, 
- facebook, 
- 2 million users per day...
- 7 million of new tinyURLs created per day!
- $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
- buy an island, make a house, live there forever!
------- 2 months pass -------------
- competitors have way more new features!!
 -- user accounts 
 -- dark mode 
 -- able to look at present users urls,
 -- public/private sharing of urls
 -- etc....
 -- analytics

- take your laptop out, and start building these features!
- a week has passed, all features have been created !
- time to add to to the deployed application!!

-- restart of the server 

^ ----- you lose all your database, usersDatabase urlsDatabase


### Data Persistence

a way to save data, and even if the computer, restarts, refreshes, the data is saved, and can be still pulled in/pulled out, etc.

We'll make a file, `.txt` and save all our data!

### Data Organization

first line of our file, will contain names of our data columns
everything under the first line will be that data and it will organized by the columns. `csv` format

### Data Interaction 

we will need to build tools to interact with our data file somehow...
```fs library```
- fs.fileRead()  --- syntax to be able to call upon reading our file, writing to it, 
- fs.fileWrite()

Creating our own data manipulation language

### Host our Data System not on the same computer/server as our application

Build another EXPRESS server, that we're able to interact with the data, and send queues, to the app to notify it for things like: "data has changed", "data has been edited" , "cannot edit data" , etc 

^-- re-inventing the wheel 

### Databases

Relational Databases 

 - PSQL
 - mySQL
 - Oracle
 - MariaDB

Nonrelational Databases

- MongoDB
- Redis
- CouchDB
- etc

## Postgres!!

postgres is a database service (free)

first command to get inside of postgres

```
sudo services postgresql start  
sudo service  start postgresql
```
```sh
psql   # connect you to postgres
\q     # quit you out of postgres
\du    # display users
\l     # display databases that your postgres service contains
\dt    # display tables
\c database_name # connect to another database
```


# SQL

a language to interact with THE DATA thats inside of the databse

#### Creates you the database in your postgres

```sql
CREATE DATABASE database_name;
```

#### To delete a database

if there are other users, or other instances connected to a database you are trying to drop, postgres will not drop it :(

```sql
DROP DATABASE database_name;
```

#### Creating Tables 

- INTEGER
- TEXT
- VARCHAR
- TIMESTAMP
- BOOLEAN
- DATE


```sql
CREATE TABLE table_name (
  column_name, column_type,
  column_name, column_type,
  column_name, column_type,
  column_name, column_type,
)
```

#### INSERT data  into the table

```sql
INSERT INTO table_name (column_name, column_name, etc) VALUES (val1, val2, etc);
```









