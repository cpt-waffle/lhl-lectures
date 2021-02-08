--- Rails Review ---

-- Routes
-- MVC
-- Controller
-- Views
-- Models
--- BREAK
-- nested routes and namespaces
-- BONUS talk about react + rails configuration

### What is rails?

- A Web framework

## How is it different from expressJS? 

- less code in rails 
- MVC
- JS vs Ruby
- Scaffolding in rails
- OOP vs Functional
- convention over configuration

In rails, you follow some rules, it plays nice :)
you don't follow the rules, rails missbehaves, nothing works



Express you needed to configure EVERYTHING!!


### Where Do you I should be looking into when working with rails?

Rails starts from the routes.rb file
From here it all gets trickled out to all of other files such Model, View, Controller, Service, Helpers, Library


# Routes

Where your rails app starts!!!
This is the ENTRY POINT for ALL OF THE REQUEST the user/client makes

# Controller 

Logic of the app! where you have all of your logic happen (gathering URLS, deleting URLS, adding URLS, etc) 

# View

the file that will be sent out on the response. It is determined by the controller action, which is named the same as file.

# Model

It is a blueprint of a table that you have in your database. This blue print already has an established connection to your database, and it assumes some of the common SQL calls that you may want to make.

 - migrations 

    It is a history of your database maturity. 
    Every migration represents either a table, a column insert, or a column delete, or a table deletion that happens within your database overtime.


    db -> migrate 

Schema.rb gets AUTO GENERATED!!!!!

NEVER EVER EVER touch/code schema.rb !!!
BAD THINGS WILL HAPPEN


migrations is your database history
you cant/shouldn't go back in time...


- IF you are on a branch.. and you made a migration
and you need alter it... its ok to rollback and migrate again

- IF my branch is MERGED INTO MASTER, that means the migrations are 
history... That means i will make a brand new migration to add a new row etc...


### IF this doesn't super makes sense yet...

If you migrated, and forgot something, make a new migration...