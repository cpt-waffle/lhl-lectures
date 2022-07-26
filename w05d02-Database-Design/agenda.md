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

## How Do you come up with Tables?


## User Story 

an explanation of a feature

As a ________ I want to do _________________
because ____________________________________

In user stories, Tables are NOUNS.
As a user, I want to create urls to save them for later.

data.csv // comma, seperated, values

### Tables 

#### What is a table? 

- a collection of data
- categorized data

Database

username, password, shortUrl, longURl
username, password, shortUrl, longURl

v@k.ca, 1234,  9wsfs5, www.google.ca
v@k.ca, 1234,  sfs923, www.reddit.com

Users
v@k.ca, 1234,


Urls
9wsfs5, www.google.ca
sfs923, www.reddit.com

### Table Conventions
(In LHL*)
- tables are pluralized, and if more than one word we use `snake_cased`


## Primary Keys (PK)

- "~unique~" Identifer of a record 
- 95% the Primary key is a SERIAL INTEGER 
- any DATA TYPE can be used to set a primary key

URLS 
{
  {user_id: vas@k.ca, shortURL: 4sadfw4, longURL: 'www.google.ca'}
  {user_id: vas@k.ca, shortURL: adsasd, longURL: 'www.a.ca'}
  {user_id: vas@k.ca, shortURL: 45424, longURL: 'www.b.ca'}
  {user_id: vas@k.ca, shortURL: 4sfdgdg, longURL: 'www.c.ca'}
  {user_id: vas@k.ca, shortURL: 4sdfgg4, longURL: 'www.d.ca'}

}

### Datatypes

TEXT( UNLIMITED NUMBER OF TEXT) 16mb 
VARCHAR (0 -255 characters MAX) 255b

Back in the older days, we REALLY CARED ABOUT DATA SIZE

VARCHAR (1-255) (phone numbers, emails, etc )
TEXT ()
BOOLEAN
INTEGERS
DECIMALS/CURRENCY
TIMESTAMPS

### Serial Integer

It is an AUTOINCREMENTING, ONLY POSITIVE INTEGER

Whenever you insert into a table (without specifying the serial integer (AKA primary key)), the system will use a stored value as tha that integer ( sequence ) and increment that number for the next time use

1
2
3
5
6
7
8
9

### Pitfall
1
2


INSERT into (id, name, password, email)
VALUES (3, 'vas', '123', 'v@k.ca');

### Foreign Keys

its a key THAT IS REFERENCE in another table
- HAS TO BE THE SAME DATATYPE AS THE KEY YOU ARE REFERENCING 

Database
v@k.ca, 1234,  9wsfs5, www.google.ca
v@k.ca, 1234,  sfs923, www.reddit.com
a@b.ca, 1234,  43255, www.facebook.com
a@b.ca, 1234,  43255, www.twitter.com


---- Users ----
id,     user     password
1       v@k.ca,   1234,  
2        a@b.ca,   1234,  
---------------

--- Url ------
shortURL, longURL               user_id
9wsfs5,   www.google.ca           1
sfs923,   www.reddit.com          1
43255,    www.facebook.com        2
34635,    www.twitter.com         2

### Conventions

Singular, snaked_cased with the reference to the referenced table

### Rules of Foreign keys
You are not allowed to delete a row, referenced in another table...

### ON DELETE CASCADE 

### Relationships
One to One
###########################
Users have an isAdmin column ( by default FALSE )
50+ million users database
20 admins total 
---------------
Create table called Admins 
### Admins ####
PK id 
FK user_id 
#############################
One to Many ( many to one)
One record in table A is related to MANY records in table B

Many to Many 
This relationship cannot exist in PSQL !!!!!
Add a bridge table in between(name of the bridge table, could be both tables names in snake case, or related to a context), where all the foreign keys will be on 



### Genaral Concepts

- NOT NULL Columns, ---> email, passowrd, profile-pic, address (DEFAULT state)
- Calculated Fields ( DONT STORE THEM!!!! ) (aggregate functions to calcualte those on the fly, SUM, COUNT, MAX, MIN, AVG, etc)

- Try not to DELETE rows (IRL)
(soft delete)
'discontinued (true/false)

```sql
SelecT * FrOm uSeRs;
```
No meme case
Dont do this ^^