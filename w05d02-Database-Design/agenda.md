# Agenda 

- Tables
- How to think of tables
- Primary Keys
- Foreign Keys
- Naming Conventions
- Data Types
- Relationships
- General Design Concepts
- Breakout Exercise
- Another Practice

## How do we Come up with a Database?

A user registers
A user enters a phone number
a user enters their friends info
the app later sends pictuers of lammas to their phone

## User Stories

As a _____ user I want to do __________________
because _______________________________________ 

As a user I want to save a story that I'm reading
to my favorites, because I want to read it more later.

## What is a Table ?

A collection of data 
^ categorized data
kind of like an object with key/vals

Tables for TinyApp

- AS a user i want to be able to create shortURLS
based on the longURLS 

# Naming Conventions for Tables
(In LHL)
- tables are pluralized, and if more than one word, they are snake_cased


Users
username, password
username, password
username, password
username, password
username, password

Urls
longURL, shortURL
longURL, shortURL
longURL, shortURL
longURL, shortURL
longURL, shortURL


# Primary Keys

- Unique Identifier of a record
- (INTEGERS)
- any data type (we usually 99% use INTEGER that is A SERIAL)
if a primary key changes (at one point) then all instances of that primary key
that was passed around as a FK will have to change 

A SERIAL is a SEQUENCE that keeps track of a number
an AUTO INCREMENTING integer
INSERT INTO users VALUES (name, password, email)
i = 1;
i++;

### Pitfalls with Serial Datatype

INSERT INTO users (id, name, password, email)
VALUES (1, 'vas', '1234', 'v@k.ca);

We specified it without couting on serial
1
3
4
5
6
7
8

Whenever you do a insert without specifying ID

INSERT into users (name, password, email) 

you will get error: PRIMARY KEY TAKEN

ALTER TABLE command
ALTER SEQUENCE 1000;

## Datatypes

SELECT * FROM users where email LIKE '';
space used to be an issue
- VARCHAR (1-255) 
- TEXT (ulimited characters)
- BOOLEAN (true or falses)
- INTEGERS ( usually the 4bytes unless you need more)
- DECIMALS/CURRENCY ( money envolved or needs a prescion)
- TIMESTAMPS

## Foreign Keys

A key that is a referenced in another table
- HAS TO BE THE SAME DATA TYPE AS THE KEY YOU ARE REFRENCING

DATA
email, password, age longURL, shorURL,
v@k.com 12345    30    google.ca 23sf5w
v@k.com 12345    30  apple.ca 2fsdf
v@k.com 12345    30  reddit.com 111sda

Users
id, email, password, age
1   v@k.com 12345    30

Urls
longURL, shorURL, user_id
 google.ca 23sf5w    1
 apple.ca 2fsdf      1
 reddit.com 111sda   1

 by convention FK, are named: Singular of the table reference snake case + id
 ie: user_id
 ie: product_id

 ## ON DELETE CASCADE

SQL database have rules.

## Relationships 
- One to one: one record in Table A is Related TO ONLY ONE record in table B
#############################################
Users 
1 million+ users
some of those users are admins (9-10 people)
Admins
id user_id
#########################################
- One to many: one record in table A is realted to many records in table B
#########################################
A user can make many URLS
#########################################


- many to many: one or more records in Table A are related to one or more records
in table B

As a user, I want to be able to add a story to my favorites
As a user, i can create a story

Users                   Favorites                       Stories
                        story_id
                        user_id

##################################################################