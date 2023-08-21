## --- W5D1 ----

- SQL intro (databases in general)
- Why SQL  ( what is the point?)
- psql ( and different commands that we can do)
- We will look into inserts/seeds
- first query 
### BREAK 
- more queries 
- BONUS -- IDE for Databases 


## Why Do We need Databases!

- TinyApp
- you have deployed TinyApp 

Out of nowhere you have 3 million users registrations 

eventual decline of users :(
( NEED MORE FEATURES )

-- you have coded the features that the users were asking for 

** you have to deploy the features **

FLAW: when you restart the server, you lose all the data :(


## How do we Perist data, in the event of a server downtime, so that the data Does not get Deleted?

.txt
- every value is after a comma 
.csv (comma seperated value)

## How do we interact with that data?

- node (fs) readFile, editFile 


## Server to host your data...

### Postgres

a database service, its able to persist data, no matter the refresh/restarts or even power outtages to the server.

### SQL

SQL the language to manupulate, add delete data 

### Postgres commands

connecting to postgres

```sh
psql
psql -h localhost -U labber -d labber
```

### to quit out of postgres
```
\q
```
### to list all databases on your postgres system

```
\l
```
### to connect/switch to the desired database

```
\c DATABASE_NAME
```

### to connect from the terminal directory to a desired database

```sh
psql -d w05d01
```

### to view all tables in the database

```
\dt
```

# SQL commands to create, delete databases

### to create a database

```sql
CREATE DATABASE database_name;
```
### to delete a database

```sql
DROP DATABASE database_name;
```

## Tables

Tables are here to organaize your data
you are able to create tables and add data to those tables

### Basic Column Types

- INTEGER
- TEXT
- BOOLEAN
- DATE

### To create a table

```sql
CREATE TABLE table_name (
  column_name column_type,
  column_name column_type,
  column_name column_type,
  column_name column_type,
)
```

### To insert data into a table

```sql
INSERT INTO table_name (column_name, column_name, column_name) VALUES ('value', 'value', 'value')
```

### SQL -- Viewing the Data

to view the data you write the `SELECT` command

```sql
SELECT * FROM table_name;
```

## Deleting data from table

```sql
DELETE FROM table_name WHERE condition;
```