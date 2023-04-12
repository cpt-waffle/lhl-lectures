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


## When we thing of on app, we make up stories, of how the app is going to be used...


### User Stories

a describition of a feature that you "may" want to build for your app.

As a ________________________
I want to be able to/I should be able to ________________________________
because _________________________________________________________________

As a user, I want to be able to create a shortURL for aLongURL i am going to submit.

** Tables are Nouns **

### Tables, What are they?

- a set of values linked to ID
- rows and columns 
- organized data

### ERD - Entity Relationship Diagram

- a way to visually show how your database(tables) look like

### Table Conventions

- pluralize our table names 
- singular table convention 

- tables with multiple words we use snake_case and we pluralize the last word!


## TinyApp Database
THE DATABASE


`urls`
id      longURL,       shortURL       user_id
 1        google.ca       f435s5         1
 2        reddit.com      d9255f         2
 3        facebook.com    f69dfg         1
 4        amazon.ca       xxxasr         1

`users`
id          email            password                     first_name,    last_name
1            v@k.ca            gj034u0wruf05u023u50259032480
2            a@b.com           950-250250w0ru0wur0su085u02u5
3...

## Datatypes

INTEGERS (PK, FK, SERIAL)
CHAR(VARCHAR)
TEXT
BOOLEAN
DATE

### Performance and Storage

- data is cheap!

-- year 2000 ---> How much GB of HHD and how much ram did your computers have?
--   120gb THIS IS GOING TO BE ENOUGH FOR A LIFETIME!
--   512mb

VARCHAR and TEXT

TEXT(unlimited CHAR) 
VARCHAR (0-255 CHAR) 9 - characters

### Integers (serial, pk, id, fk)

`Primary Key - PK`
-- Any column (string, boolean, int, etc) CAN BE primary key

Integer, unique, serial (auto increments upwards, 1,2,3....)


`Foreign Key - FK`

A REFERENCE IN ANOTHER TABLE
Foreign key has to be THE SAME DATATYPE as THE KEY that is being refenced

### Relationships

#### -- one to one (rare)
One X has One Y
One Y has One X

#### -- one to many (very common)
One X has Many Y
One Y has One X

#### -- many to many (common) 

One X has Many Y
One Y has Many X
THIS RELATIONSHIP CANNOT TRULY EXIST (In psql)

A bridge table will fix the Many to Many relationship
its a 3rd table between the 2 tables that hav ethe many to many relationship
3rd table will take EVERY FOREIGN key that needs to be assigned to perform the many to many relationship

One to many   <  >      Many to one


### General Concepts

-- start with your CORE stories ( )
    ^--- Create the tables only for your core stories first, eventually add more tables after you create the core features.

#### AGGREGATE FUNCTIONS

(SUM, AVG, COUNT, etc)

Do not store, aggregate values into columns

#### NOT NULL FIELDS

first_name   NOT NULL
last_name    NOT NULL
picture      DEFAULT (default.img)
phonenumber  DEFAULT (000-000-0000)
 
--- Tinder ---
email (phone number)

#### Try not to HARD DELETE Rows

`urls`
id      longURL,       shortURL       user_id     deleted(FALSE)
 1        google.ca       f435s5         1           TRUE
 2        reddit.com      d9255f         2           fALSE
 3        facebook.com    f69dfg         1           FALSE
 4        amazon.ca       xxxasr         1           FALSE