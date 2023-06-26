--- W5D1 ----

 - SQL intro (databases in general)
 - Why SQL  ( what is the point?)
 - psql ( and different commands that we can do)
 - We will look into inserts/seeds
 - first query 
 BREAK 
 - more queries 
 - BONUS -- IDE for Databases 



## Why do we need databases

- tinyapp 
- deployed tinyapp
- 3 million users, with many urls 
- bigger than other social media apps
- users are starting to demand NEW FEATURES
- runtime memory, 
- we need a way to save this data, even though our server will restart/relocate/etc


## Postgres and SQL

Postgres is a program/service that is able to save data, and persist it, even if the power to the computer/server gets turned off, or server needs to be moved

- connect to this server remotely
- build programs to interact with the data
- tools to look up data, connect data, add more data, and remove data
- user managment/role managment


SQL is the language to manipulate, add and delete the data 


### Lets get into postgres

connecting or getting into postres

```sh
psql
```

to quit out psql

```sh
\q  
```

### Database

a folder, that contains all of your data for that specific project

to see what databases you have 

```sh
\l
```

To change the current databaes you are in, use

```sh
\c DATABASE_NAME
```

To look at the tables in the database, use the 

```sh
\dt 
```

```sh
psql   # connect you to postgres
\q     # quit you out of postgres
\du    # display users
\l     # display databases that your postgres service contains
\dt    # display tables
\c database_name # connect to another database
```

^--- Postgres Commands

## SQL

a Language to interact with THE DATA in your DATABASE


# How to Create a database

```SQL
CREATE DATABASE database_name;
```

# To delete a database

```SQL
DROP DATABASE database_name;
```

## Tables -- what are they, Creating Tables

Tables are here to organize your data
you are able create table and add data with its specific column names...


| name | description | expired
 ''      '         '   

### Basic Column Types

 - INTEGER
 - TEXT
 - BOOLEAN
 - DATE



```sql
CREATE TABLE table_name (
  column_name column_type,
  column_name column_type,
  column_name column_type,
)
```

### INSERT DATA INTO TABLE

```sql
INSERT INTO table_name (column_name, column_name, column_name) VALUES ( val1, val2, val3);
```