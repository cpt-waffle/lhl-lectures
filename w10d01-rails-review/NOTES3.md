--- All about Rails ---

entire rails review from top top 
from making models views controllers routes

- nested routes
- namespacing 
- rails api ()

Routes ---
First entry of the rails server. This is where the server decides what controller should it use for the logic
of the request.

Controller ---

Links routes models views
Manages logic
if your route was plural your controlller will be plural as well

Views --- 

the file that is sent back to the client
this is our html/css layouts that gets generated on the server (server side rendering)
we can embbed logic with it by using the template literals  <%= %>

Models ---

a blueprint for a table that lives in your db
models come with "methods" to query up the database without writting raw SQL
help us with writting query methods by giving us "helpers" and "assosiations"

   Migrations ---

      its a specific record of adding/deleting/creating/changing a table in the database
      records are kept for history purposes and we never edit history !!
      this migrations create the schema file which gets generated every single time 
      you add a migration

      the idea is that if a server of data dies or you are moving to a different platform,
      with one command you should set up your entire databse without any issues.


NEVER TOUCH HISTORY MIGRATIONS!!

    IF you are on a branch, and the migrations YOU made, have an error/issue, you are allowed to 
    rollback and fix it.

- whats a history migration?

   - when something is in master, its history.... you cant go back in history and touch it
   - if you made an error or need to alter history, make a new migration

---------------------------------

If you make a migration and forgot to add a column a row a refernce basically anything,
just make another migration...