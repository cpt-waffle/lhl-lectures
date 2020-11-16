--- Rails Review ---

-- Routes
-- MVC
-- Controller
-- Views
-- Models
--- BREAK
-- MVC and models and assosisations
-- nested routes and namespaces
-- BONUS talk about react + rails configuration


--- Routes.rb

Routes file, determines what action needs to be taken for the response that comes in.

--- Controller

Controller is for logic. Logic that gets done and then sends out a view. The view is determined
by the name of the function.

--- View

A file that gets proccessed into HTML, then gets sent out to the client ( server side rendering!! )


Migrations

--- they are the way to create tables, add columns, remove columns in your database. They serve as a 
HISTORY of what has happened during the development process. You can always "rollback" a migration
if it doesnt satisfy our eneds or breaks something.

Rollback and add a migration ONLY IF IT DOES NOT TAMPER WITH HISTORY!!!!!