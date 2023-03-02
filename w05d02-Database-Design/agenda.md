# Agenda 

- How to think of tables
- Tables
- Primary Keys
- Foreign Keys
- Naming Conventions
- Data Types
- Relationships
- General Design Concepts
- Breakout Exercise
- Take up Exercise ^

## What you have learned so far!:

- DATA in our database
- SELECT queries 
- JOINs
- creating tables
- inserting data

## How to think of tables ?

### A User story
```
As a _____________________
I want to be able to ____________________________________
_________________________________________________________
because _________________________________________________
```

- As a user, I want to save a long url, to my app, by adding a short url to it.
- As a user, I want to share my shortURL with people so they can visit the long url site.
- As a user, I want to be able to see only my urls, when i'm logged in.

**Tables are NOUNS in my user stories**

### Tables

structure 
organized collection of data
series of rows and columns

### ERD - Entity Relation Diagram

- a way to visiually show you how your database is shaped

## Table conventions

-- pluralized the table name!
-- tables with multiple words, we use snake_case
`order_items`, `line_items` 

Tables Users
PK(email)    first_name  last_name 





----------------Table Urls
(PK)id        longURL             shortURL      user_id
1       www.google.ca           fs5f55             1
2       www.reddit.com          sd9455             1
3       www.lighthouselabs.ca    5dfg6             2
4

-----------------Table Users
id      user_email     first_name    last_name
1         vas@k.ca          vas           klim 
2         lhl@gmail.com     lhl           lhl

### Datatypes

INTEGER  <---SERIAL
TEXT(unlimited)
VARCHAR(255)
DATE
BOOLEAN
TIMESTAMP

### Back in the old days.......

VARCHAR --- (1-255) 1b-255b
TEXT    --- 1000mb - 
INTEGER --- SERIAL ---> id ----> positive integers

INSERT INTO urls (long, shortURL) VALUES ('', '')

#  PK --- Primary Key
Unique identifier of a record (UNIQUE TO THE TABLE) no repeats of same
95% of the primary keys are INTEGERS SERIAL (but... by definition, a primary key can be anything)

#  FK --- Foreign Key

A key that is a REFERENCE in another table
Foreign Key HAS TO BE THE SAME DATATYPE AS THE KEY YOU ARE REFERENCING



## Relationship

- One to Many  

One X has many Y
One Y has one  X

- One to One

One X has One Y
One Y has One X

- Many to many

One X has Many Y
one Y has Many X

CANNOT BE MADE IN POSTGRES
CANNOT EXIST in a database 

To fix many to many we introduce a bridge table

-- As A User I want to be able to favorite a URL


##  General Concepts + Tips

Calculated Fields should be calculated with AGGREGATE FUNCTIONS 
(SUM, AVG, COUNT, etc)
Do not store an aggregate value into a table....!

NOT NULL fields 

first_name DEFAULT John
last_name DEFAULT Doe
email     NOT NULL
picture_profile DEFAULT default_pic.jpeg
phone_number DEFAULT 00000000000


TRY NOT TO DELETE ROWS
(soft delete)

----------------Table Urls
(PK)id        longURL             shortURL      user_email  isDeleted
1       www.google.ca           fs5f55             1           FALSE
2       www.reddit.com          sd9455             1           FALSE
3       www.lighthouselabs.ca    5dfg6             2           TRUE
