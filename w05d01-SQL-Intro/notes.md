--- W5D1 ----

 - SQL intro (databases in general)
 - Why SQL  ( what is the point?)
 - psql ( and different commands that we can do)
 - We will look into inserts/seeds
 - first query 
 BREAK 
 - more queries 
 - more db talks 


#----------------------------------
TinyApp -- 

 - tinyapp has become really famous!!
 - we deployed it, someone picked it up, shared on social media
 - and now its become the next insta/facebook gram
 - 3 mill users per month
 - 4-6 months, popularity drop.. :(
 - there are alot of features lacking in our tinyapp
 - we hear there's a competitor that is bringing on these features that may take over 
 - DARK MODE, analytics, favorites, users groups, friends, organizations, etc
 **** FEATURES COMPLETED ****

push our features to github 
-> autopush to a server that is on AWS
---- RESTART ----
{ 2 users,}  {2-4 urls}

DATA IS VERY IMPORTANT ( even more important than the app itself)
^--------------------

#---------------------------------
We are going to keep our data, somwehere else that is not in the SERVER,
so it can be persisted!


Server A <---------------------------> Server B database.txt
                                       Build tools to access the file, add info to the file, remove info, etc

DATABASE SERVICES

- psql (postgresql)
- Oracle (java)
- mysql 
- couchDB 
- MariaDB
- mongoDB
- reddisDB


# ------------------
psql - logs you into postgres service
\q
\du - display users
\l  - display all databases
\dt - display TABLES
