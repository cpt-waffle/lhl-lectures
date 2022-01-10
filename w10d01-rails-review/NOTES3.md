-- Agenda --

- Rails review - 

- routes
- controller
- model
- seeds
- migrations
- forms 


--- Rails versions very very dependant 


==- Routes.rb --- most important file. This is where routes reside (RESTFUL)
routes also picks the controller#action for each route. Whenever that route has been called, THEN the controller we be called with the corresponding method!


Controller -- Logic of request. This is where all of your logic goes in, for specific requests.


Models --- 

 - the connection to the database 
 - tables to the database (not all tables but definetly alot of them)
 - the data of the application
 - Classes

 Active Record
They blueprints of tables. IT has some cookie cutter methods that you will find
very useful.




Scenario 

- I have added 2 migrations, BUT i forgot to add a foreign key to the mix.

I have 2 options 


--------------------

-- Rollback

rolling back, deleted the tables, and lets me alter the database
 |
 |
 ---> When you are working on your own branch, and NOTHING has been merged into 
 prod (master/main/release)


-------------------

-- Make a new migration

make a migration that adds a foreign key to the needed table
| 
|
---> When something HAS been merged to prod, and you need to keep the data that has been populated by the clients...



Assosiations

belongs_to
has_many

through

Table A ---------------<   Mid table >------------- Table B

Authors                     author_books              Books  
id                            author_id               id
                              book_id



