--- W5D1 ----

 - SQL intro (databases in general)
 - Why SQL  ( what is the point?)
 - psql ( and different commands that we can do)
 - We will look into inserts/seeds
 - first query 
 BREAK 
 - more queries 
 - more db talks 

## Theory!!


## --------------- TinyApp -------------

*** add a feature to make data persist ***
-- Tinyapp, has become the next Instagram!
-- 1 mill users per month!
-- people are sharing thier urls, pictures, 
-- $$$$$$$$$$$$$$$$$$$$$$$

-- 2 - 3 months -- lose users... 
-- people want features!!
-- DARK MODE, analytics, favorites, user groups, friends, etc 
*** FEATURES COMPLETED ***

DEPLOY YOUR FEATURES !!!
* restart your server *
LOST ALL OF THE DATA 
we kept all data in memory ( really fast )

Destroy an app == remove the database 

-- offline time :(
-- we can "rebuild" it 

I destroy your data 

------ Data Persistence ----------

I want a file to keep information, and thats all. 

Need a build a way to add data in, and read the data (fs.read/write)
-- Storing data --

we will move the database.txt file somewhere else and we'll need a way to access it

### Database Services

- PSQL (postgresql)
- Oracle (java)
- mysql 
- couchDB
- mongoDB <-- nonrelational database
- MariaDB
- .....


### How do we, use PSQL (database)

To get into psql

```sh
psql #to get inside
\q   #to quit
\l   # list all of your databases on your system
\c _database_name # connect to _database name_
```


```sql
CREATE DATABASE __database_name;
```

To Create a table....

```sql
CREATE TABLE table_name (
  column_name column_type,
  column_name column_type,
  column_name column_type,
  column_name column_type,
  column_name column_type,
  column_name column_type,
  column_name column_type,
  etc.
)
```

Adding data to a table....


```sql
INSERT INTO table_name (column_name, column_name) VALUES (val1, val2);
```

## How to Grab Data from the database

```sql

`SELECT * FROM table_name;`