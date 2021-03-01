--- W5D1 ----

 - SQL intro (databases in general)
 - Why SQL  ( what is the point?)
 - psql ( and different commands that we can do)
 - first query 
 BREAK 
 - more queries 
 - more db talks 

------------------------

TinyApp !!!

7 Million Users added+

 - people be sharing all of the URLS

--- People are Demanding Features ----

- likes features 
- favorites features
- twitter integrations
- img integration
- analytics
- revenue tracking

== LETS WORK ==

analytics, likes, favorites

git add .
git commit -m "New features added"
git push 

-- REDEPLOYING PROCESS ENABLED
-- IT HAPPENS 

your data gets reset (wiped, cleaned....)
lost 7 million users !!!

-- Data is new oil --

to collect data 
we must be able to:

- store it 
- co-relate it
- retrieve it


require (fs)
users.txt
name,    email,        passwordHash,      id
vasily,  vas@gmail.com, aSd43f46sdf4f5f, 245,

urls.txt
short_url, long_url, user_id


--------- server failure (physical/software) -----------

Seperation of Concerns

  NASA BASE                                   AW3
Backend Server <--------------------------> Data Sever  <----> data files
                                           /addUrl

Database Services
SQ
PSQL <---- relationsional ----->

id
245 Vasiliy Klimkin v@k.ca

user_id   long_url
245       www.google.ca


non-relational database


users: {
   1: ..
   ....
   245: {name: Vasily, email: v@k.ca, urls: {
       0: {longURL: google.ca}
   }}
}


-- PSQL ---

port # 5432

-- DATABASES are globally installed, as long they are ON, you can get in one from anywhere

to get into postgreql -- "psql" in terminal
to quit psql --          "\q"   in terminal

List all the database  -- "\l" 
list all the users     -- "\du"
connected to a specific database  -- "\c _DATABASE_NAME_"
display some sort of data in it   -- "\dt" - display tables


to DELETE the DATABASE -- SQL Command
DROP _DATABASE_NAME_; <===== dont forget the semi-colon
CREATE A database
CREATE DATABASE _DATABASE_NAME_;

Seeding --- the act of putting data into your database
command to run a file externally from psql - "\i"