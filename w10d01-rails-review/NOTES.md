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

### Rails ###

rails new tinyApp == setup the entire project in one go
express => npm init => npm install 

-- config/routes.rb

- every time, a client/user does a request, THE FIRST FILE that gets checked/ran
is routes.rb

C - Controller

Controller - is a file, that when a route decides to use a specific controller, logic will execture
from that controller and .... rendered

View - Once the method of the controller finishes executing, a view (file) will be sent out
that is the SAME NAME as the controller method.

Model - ?? 

db.js <-- connection
dbHelpers.js <--- queries

Migrations
Is a way to keep history, of every single addition to the database. IT also lets so, do things like
"rollback" if things break on the db.

Creating migrations, generates a schema RB file which is maintained automatically.

!!!WARNING!!!

DO NOT TOUCH/EDIT THE SCHEMA.RB file!!!!!


-- SCHEMA.js <------ when i add a new addition to schema, i have to slack everyone
and say "reset ur DB"

-- SEEDS.js 

Rails Models

-- Some quaries, are created for you, without you needing to define/write them



MVC