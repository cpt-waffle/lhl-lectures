--- W5D1 ----

 - SQL intro (databases in general)
 - Why SQL  ( what is the point?)
 - psql ( and different commands that we can do)
 - first query 
 BREAK 
 - more queries 
 - more db talks 

------------------------

W4 TinyApp

you have deployed TinyApp......
TinyApp has become the next biggest app in the world
14 million users + 
petabytes off tinyUrls
$$$$$

there's a few lack of features

- friends groups
- private/public URLS
- analytics

we try to add a feature....

- server gets refreshed and that feature is added....
- BUT WE LOST ALL THE DATA!!!!!!

^ VERY BAD


why not store it into files?

users.txt  <----
urls.txt   <----

if and when we will need to grab data out of a file
we will need to make scripts/commands to do this.

Organized way to store data --- CSV Comma Seperated Values

Seperation of Concerns 

One Server Running the ExpressJS
another server to run this Data 

From a service --> So will need build a program that is able to host our data,
and we are able to connect to it, and we are to save/read data from it.....


Relational Database -----
-- postgresql SQL 


How Do I enter Postgresql?
-- psql

How Do I exist postgresql?
\q

How Do I see All my databases inside of postgres?
\l

How do I CONNECT/GO INTO these databases?
\c DATABASE_NAME

How do I see ALL OF MY TABLES in my DATABASE?
\dt

How to connect right away to a specific database
psql -d DATABASE_NAME


Creating a database ?
CREATE DATABASE database_name;


Adding data like tables and seeds (we are going to touch surface level of this)


Creating Tables

CREATE TABLE fruits (
  name TEXT,
  num INTEGER
);

Insert data into the Table
INSERT INTO fruits (name, num) VALUES ('coconut', 3);