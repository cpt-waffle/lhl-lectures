--- Rails Review ---

-- Routes
-- MVC
-- Controller
-- Views
-- Models
--- BREAK
-- nested routes and namespaces
-- BONUS talk about react + rails configuration

/// Rails ///

What is Rails?
 - ruby --  language
 - rails -- framework -- have rules, you have to follow them, or things dont really work well?

 expresJS -- Framework

lowdash library - collection of methods


Rails has conventions -- behave well!, do stuff well!

rails new ______
bunch of packages,
made me a file structure


express
 server.js

 ------------------------------------------------

/config/routes.rb

When user REQUESTS something, the first thing that gets hit, it the ROUTES.RB FILE


routes -----> controller

C - Controller 

a file, that has a bunch of function that have logic in them

V - is a file that gets sent out back to the client as a response 
the View file MUST be the same name as the controller method/(action)


M - Model
- something that talks to database
- something that is able to grab info from the database
- a blueprint of a specific table that is in the DB

/////////////////////////////////////////////////////////////////
schema.sql? schema.js
seeds.sql? seeds.js

Migration needs to be ran before using the rails server!
 
WTF is Migration!?

Migrations are files that have a specific database operation (create table, edit table, delete table)

-- If i'm working on a branch
 - im able to mirgrate/rollback 
ONCE ITS ON MASTER/PRODUCTION gg
you have to make new migrations now. . .
- rollback on MASTER if NEW FEATURE is borked

----- if you need to change anything, its a new migration. 


_____
 M V C 