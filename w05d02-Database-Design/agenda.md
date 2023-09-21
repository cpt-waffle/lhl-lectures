## Agenda 

- User Stories
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



## How Do we Think of Tables 

## TinyApp

we used arrays and objects to collect data from user for creating urls.

the data was kept in memory (RAM).

### PSQL/SQL or Any Database Service

it lets you PERSIST data

### Table in SQL

- is a way to store data
- organization
- rows and columns

### User Stories

I want my app to store urls for users.

```
as a _______________
i want to be able to do
______________________
______________________
______________________
because ______________
______________________
______________________
```
*** Tables are NONS in users stories ***

as a user, i want to be able add a long url, 
which the app generates a short url for because
i want to have smaller urls.

Databases

email,          password,                  shortURL,         longURL
v@k.ca            1234                      FD9a4           www.google.ca
v@k.ca            1234                      324af           www.reddit.com
v@k.ca            1234                      Zzt35           www.apple.ca

----------------------------------
Users
email,          password,
v@k.ca            1234  
----------------------------------

----------------------------------

Urls
shortURL,         longURL
FD9a4           www.google.ca
324af           www.reddit.com
Zzt35           www.apple.ca
----------------------------------

### Table Conventions

- should tables be singular or plural (user or users) ??
- it should be singlar 
- it should be plural 

at lighthouselabs, we follow the PLURAL convention 
all of our tables will be pluralized (users, urls, restaraunts, maps, items, categories, etc)

- make sure you use `snake_case` when you make a multiple word table or column (user_urls, product_items, etc)

- column names, SHOULD BE singular, unless its a COLLECTION* 


### DataTypes

INTEGERS
FLOATS/DOUBLE
CHAR (varchar or text)
BOOLEAN
DATE / DATETIME

### Perforamnce, Storage, speed of the Search

- back in the day... 
70-80-90-2000s

10-50gb of storage
YOU WILL NEVER USE THIS MUCH IN YOUR LIFE!!!

215mb of RAM 


2023 year of now

1tb - 2tb
8 - 32gb DDR4 - 5 

1 hard drive external, 2tb 35$ + tax = 42$

in terms of storage, we dont really mind anymore, because 
the storage is so cheap, we usually use the default INTEGER, to store values
even through we go to smallint, but because so much storage we dont really mind.

## TEXT vs VARCHAR

VARCHAR(0 - 255)
 - email
 - phone_number
 - first_name
 - last_name
TEXT( unlimited 4x bytes ^ 2)
- note
- chapter
- etc

### MongoDB

added the nonrelational DB structure


Oracle, Postgres

Postgres decided to add JSON and Array columns to have same-ish functinality as MongoDB


----------------------------------------------


## Primary keys

a column that has UNIQUE values
Primary keys CAN BE ANY DATATYPE (integers, strings, booleans, floats, etc)
primary keys should realistically never change (they should be non volotile)


## Foreign Keys

it is a reference to another table ( another row in that table)
to connect the data that split up (because multiple tables !)
foreign keys has the be THE SAME DATATPYPE as the KEY they are referencing 


----------------------------------
Users
id    ,email,(PK)          password,
1      vasily@k.ca            1234  
2      a@b.ca            1234
----------------------------------

----------------------------------

Urls
shortURL,         longURL                  user_id
FD9a4           www.google.ca                 1
324af           www.reddit.com                1
Zzt35           www.apple.ca                  1
f89o2           www.canadiantire.ca           2
----------------------------------


## Different Join Relations

One to Many (very common)

One X has many Y
One Y has One X

One To One (very rare)
One X has One Y
One Y has One X


Many to Many (very common, but cannon exist in postgres :(  )

One X has Many Y
One Y has many X


Bridge Table 

a table that connects two other tables with the MANY to MANY relationship


----------------------------------
Users
id(PK)    ,email            password,
1         vasily@k.ca         1234  
2           a@b.ca            1234
----------------------------------

----------------------------------

Urls
id(PK)   shortURL,         longURL                user_id(FK)
1         FD9a4           www.google.ca                 1
2         324af           www.reddit.com                1
3         Zzt35           www.apple.ca                  1
4         f89o2           www.canadiantire.ca           2
----------------------------------


----------------------------------

Favorites

id(PK)   user_id(FK)    url_id(FK)
1             1          2
2             1          3
3             1          4
4             2          1
5             2          2

### General Concepts

Always Start with the core user stories first, make those tables, and make those features.
When those features are completed move on to adding other tables.

DO NOT TRY TO CREATE THE PERFECT DATABSE FROM DAY - 1 

Cohorts, users, topics, activities, exercises, completed_activties


### General Concepts Aggregate Functions

SUM AVG COUNT ETC

- NEVER store the values of aggregate functions in columns/rows


### Constraints 

email         NOT NULL
password      NOT NULL
first_name    DEFAULT("")
last_name     DEFAULT("")
phone_number  DEFAULT("000-000-0000")
picture       DEFAULT("profile.png")
address


### Deletions 


Urls
id(PK)   shortURL,         longURL                user_id(FK)            DELETED
1         FD9a4           www.google.ca                 1                 false
2         324af           www.reddit.com                1                 false
3         Zzt35           www.apple.ca                  1                 false
4         f89o2           www.canadiantire.ca           2                 false
----------------------------------