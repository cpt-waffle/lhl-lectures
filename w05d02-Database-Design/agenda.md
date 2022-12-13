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
- Another Practice

### You have learned how to:

- get data out of a database
- SELECT queries 
- joins (we tried :)  )
- creating tables
- inserting data


### How to think of tables

## User Stories

an explanation of a feature


```
As a _______________ I want to do ________________________
because __________________________________________________


As a user, I want to be able to add URLs (long) and the app makes a shortURL
because, I want to shorten the size of my urls, and make them shareable
```

### Tables

#### What is a Table

- a collection of data 
- categorized

### ERD 

-- Entity Relation Diagram

## Table Conventions 
(in LHL*)

- table names, are pluralized and if more than one word is in a table, we use snake_cased
DATABASE

1 v@k.ca    1234 r23rs5    www.google.ca
1 v@k.ca    1234 1234af    www.reddit.com 
2 a@b.com   4567 34ffs5    www.facebook.com


Users
PK
1   v@k.ca    1234
2   a@b.com   4567


Urls
r23rs5    www.google.ca
1234af    www.reddit.com
34ffs5    www.facebook.com

#------------URLs----------------
                                 FK
r23rs5    www.google.ca          1
1234af    www.reddit.com         1
34ffs5    www.facebook.com       2


## PK (Primary Keys)

- "unique" identfier of a record, (UNIQUE TO THE TABLE)
- 95% the primary key is an INTEGER (SERIAL INTEGER)
- any DATA TYPE can be used to set a primary key!


## FK (Foreign Keys)

- its a key that is a REREFENCE in another table
- HAS TO BE THE SAME DATATYPE AS THE KEY YOU ARE REFERENCING

## Rules of Foreign Keys

You are not allowed to delete a row, referenced in another table (unless cascade is applied)

You can still join on anything (doesnt need to be a FK PK relation), but INSERT and DELETE may have a FK constraint where the FK must exist.


### Datatypes

- TEXT(unlimited) 16mb (comments, messages, manuals, descriptions.)
- VARCHAR(255)    5b    255b    100b   (phone numbers, emails, names, etc )
- INTEGER (serial, unsigned, double int, etc)
- BOOLEAN (T or F)
- DATE
- DECIMALS/CURRENCY 
- TIMESTAMPS

Back in the old days........


### Serial 
let i = 1;
i++;
it is an autoincrementing only positive integer

1
2
3
4

6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
 ---------> 23
24

```sql
INSERT into (email, password) 
VALUES ('b@c.ca', '1234567');
```

### Relationships 

one to one
one to many -- many to one

-- cannot exist --
many to many