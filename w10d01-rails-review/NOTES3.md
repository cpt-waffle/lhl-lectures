-- Agenda --

- Rails review - 

- routes
- controller
- model
- seeds
- migrations
- forms 


-----

Javascript 
Worked in Ruby
|
--> how to approach a new language
 - python
 - go lang
 - java

-------------- Rails Review

- routes.rb <-- the most important file of Ruby!!

Routes.rb -- the file that determines where does the request go
(in what controller)

Controllers -- the logic of what happens when a route gets hits by
a request

Views --- the UI that is sent out to the client 

Models --- Blueprint of a table(s) in your database
        -- Class/Object with many many cookie cutter SQL methods built in
   ^---- how many SQL commands did you write ?
                    ^--- why tho?

^---- SQL is alot faster
ORMS (Activte Record) can be AS fast as SQL

-- maintainability


Orders.incldues(:line_items).line_items.incldues(:products)
                     


^-- what is a migration ?

A history of all your tables/column addtions/column removals/ in the database

- if you ever need to rollback, you the option to
- schema.rb gets auto generated... 


# should you rollback when making a mistake on your table
# OR make new migrations

- if your tables havent been added to prod, you can rollback to fix
- otherwise ALWAYS new migration!!!