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
- BONUS -- show an IDE for database 

### User Stories 

A description of a feature 

As a ____________
I want to be able to/ I should be able to 
_________________________________________
because 
_________________________________________

*** Tables are NOUNS ***


### Tables, what is it?

- rows and columns
- simular data grouped together
- store related data
- entity storing info about a specific thing
- organized info


Tinyapp (DATABASE)

email,   password,   longURL,                 shortURL 
vasily@k.ca  234249dsf93  www.google.ca            9fi9345j
a@b.ca  9gjfdlg03j4  www.facebook.com         fsd0j452
vasily@k.ca  234249dsf93  www.reddit.com           fjgggg43
vasily@k.ca  234249dsf93  www.amazon.ca            sadz241f
vasily@k.ca  234249dsf93  www.canadiantire.ca      lk9;lk33
a@b.ca  9gjfdlg03j4  www.apple.com            90-234df


### ERD - Entity Relationship Diagram

- a way to visually show how your database looks like ( connections between tables, etc)

### Table Conventions

- pluralize our table names <<<<(Lighthouse perfers pluralized tables)
- singular name their table 
- use snake_case for multiple words for a table


Tinyapp (DATABASE) refactored

`users`
(PK) id SERIAL INTEGER,     email,   password,   
1                        vasily@k.ca  234249dsf93  
2                        a@b.ca  9gjfdlg03j4 

`urls`
longURL,                 shortURL            user_id
www.google.ca            9fi9345j              1
www.facebook.com         fsd0j452              2
www.reddit.com           fjgggg43              1
www.amazon.ca            sadz241f              1
www.canadiantire.ca      lk9;lk33              1
www.apple.com            90-234df              2

### Datatypes

- INTEGERS(PK, FK, SERIAL )
- CHAR(TEXT(unlimited), VARCHAR(255))
- BOOLEAN
- DATE
- TIMESTAMP

### Performance and Storage 


- nowdays data is cheap!
- but not so long time ago (50-60 years)
- storage WAS SUPER EXPENSIVE!!


TEXT('a'---------------------------------------------') allocating 1gb!!
VARCHAR(255bytes) <-- 255 characters maximum

##  INTEGERS 

#### Primary Key (PK)

is always a unique value for every row 
Primary keys CAN BE (string , boolean, integer, etc)

DATA VOLITILITY


#### Foreign Key (FK)

is just a REFERENCE TO A ROW IN A ANOTHER TABLE!!!!
Foreign Key has to be THE SAME DATATYPE as THE KEY that is being referenced


### One to One (rare)
One X has One Y
One Y has One X

### One to Many (very common)
One X has MANY Y
One Y has One X

### Many to Many (common, but cannot exist in the database...)
One X has MANY Y
One Y HAS MANY X

A bridge table to signify the Many To Many Relationship between the tables

A bridge table will fix the many to many relationship
its the 3rd table, between the 2 tables that have the many to many relationship
Bridge table will have every FOREIGN KEY from the 2 other tables in it.

<one to many>    <many to one>


### General Concepts

- always start with core user stories, to build your initial database


#### Aggregate Functions

(SUM, AVG, COUNT, etc)

Do not store aggregate values ( because you can you the functions and get more relevent data)


### Constraints 

email             NOT NULL
first_name       ---------
last_name        ---------
phone_number    ----------- DEFAULT(000-000-0000)
picture          ---------- DEFAULT(default.img)

#### Deletion

TRY not to HARD DELETE rows

id      longURL,       shortURL       user_id     deleted(FALSE)
 1        google.ca       f435s5         1           TRUE
 2        reddit.com      d9255f         2           fALSE
 3        facebook.com    f69dfg         1           FALSE
 4        amazon.ca       xxxasr         1           FALSE