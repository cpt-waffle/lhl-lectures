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

## An App Idea Comes to Mind!


### User Stories

a description of a feature that you may build.

As a __________________________________
I want to be able to __________________
_______________________________________
because _______________________________
_______________________________________


As a user I want to save a URL into my app,
where it will create me a shortURL for the longURL
i want to save, because I want to keep a list of all
the URLS that I'm trying to record.

**Tables Are Nouns!**

-- Url
-- User 


### Tables, What are they?

-- could be excel tables
- store collected data
- organized collection of data

### ERD - Entity Relationship Diagram

- a way to visually show you how your database looks like

-- Database 
LongURL,     ShortURL(255 BYTES),      user_email,     first_name,     last_name,    password
google.ca     awd325f        v@k.ca            vas             klim          1234
reddit.ca     453fgyt        v@k.ca            vas             klim          1234
facebook.ca   g63gdgy        v@k.ca            vas             klim          1234
amazon.ca     bbby547y       v@k.ca            vas             klim          1234


`information duplication`


### Table Conventions!

- pluralized table name (do not mix the 2 conventions singluar/plural only use one convention per database)
- user_restaurants  --- tables with multiple words, we use snake_case, and we pluralize the last word


----------------- Urls ------------
longURL,      shortURL      FK
google.ca     awd325f       1    
reddit.ca     453fgyt       1
facebook.ca   g63gdgy       1  
amazon.ca     bbby547y      1 

canadiantire.ca 6545g5f     2

---------------- Users -------------
email   first_name,     last_name,     password    ID
vas@k.ca     vas             klim          1234     1
a@b.com       a            b             efff       2

## Datatypes

INTEGERS (PK, Serial, FK)
TEXT(unlimited)
VARCHAR(255)
DATE
BOOLEAN

## Back in the old days...

data was expensive

2003-2004 

How much RAM and hard-drive space did you have?


*Then*
50gb harddrive 
Cds - 4gb capacity 
Floppy Disks -- 1gb - 500 mb
-- 512mb RAM 

**Now** 
4.5 TB of space (ssd)
RAM 16-32gb

For every row you insert, the database, allocates space even if NOTHING was stored in the specific column


## VARCHAR vs TEXT

VARCHAR can store up to 255bytes in its row
you can specify the VARCHAR column (12)

TEXT
has an unlimited amount 

Searching 

would you like to search through 255 characters MAX or 65k?


-----------------------------------

## INTEGERS (serial, pk, id, fk)

Primary Keys

IDs -- almost EVERY table has a `unique` identifier 
any column can be a UNIQUE identifier

- volatility

-- although emails, are unique to each person, they maybe changed by the user


Foreign Keys 

A REFERENCE in another table
Freign key HAS TO BE THE SAME DATATYPE AS THE KEY YOU ARE REFERENCING


## Relationship

- one to one (rare)
Table A has Table B
Table B has Table A

-- Performance and size of the database

- one to many (very common)
One X has Many Y
One Y has one  X

- many to many (common-ish)
`THIS RELATIONSHIP CANNOT TRULY EXIST`
One X has Many Y
One Y has Many X

A bridge table to fix the Many to Many
is a 3rd table between the 2 tables that have a many to many relationship
The bridge table TAKES ALL THE FOREIGN on it to complete the connection


### General Concepts (pt2) and Tips

- (user stories) start with your CORE user stories 
^-- No database EVER is ever completed, and every database was never created in 1 day

AGGREGATE FUNCTIONs
(SUM, AVG, COUNT, etc)

Do not store aggreagte values (any value that can be calcuated) into a table

### NOT NULL FIELDS

Dating App Register Form

first_name -- NOT NULL
last_name  -- NOT NULL
email      -- NOT NULL
picture    -- NOT NULL
etc...


first_name   last_name ---> John Doe
email   --- NOT NULL
picture ---- DEFAULT ---> default_img.png
phonenumber ----> DEFAULT   000000000000000000000

### TRY NOT TO DELETE ROWS
(soft delete)

----------------- Urls ------------
longURL,      shortURL      FK                  isDeleted
google.ca     awd325f       1                      FALSE
reddit.ca     453fgyt       1                      TRUE
facebook.ca   g63gdgy       1                      FALSE
amazon.ca     bbby547y      1                      FALSE
