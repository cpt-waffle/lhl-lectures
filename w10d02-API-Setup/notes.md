---------------- Agenda ----------------

Looking into how to build a project with a front-end
and backend(s)

- Rails
- Express
- React
- Pitfalls( mainly cors)
- Organization of Code ( alittle bit of Architecture )

-------------


Server Side 
^-- EJS, ERB, PUG, etc

Client Side <--- API, frontend server


------------------

Repository Setup !!

1 - 2 repo option. One repository for frontend, one forback 
 - clever divison

Restaraunt APP
 Show all the items for a specific restaraunt

- route (api)
 --4556 add route for items
- frontend page
 --4556 add page for items


2 - 1 repo option, where you just a folder for frontend a folder for backend
- seems cheaper ( easier to maintain )
- controller changes (GIT)


Start a project
- make a folder
- generate backend in rails
rails new rails-api --api --database=postgresql
- made a route 
- made a controller
- made a model with migration
- added my columns into the migration
- added some seeds
- then in the controller, i made an "index" route
 - that sends out a bunch of data to the client 

-- For Rails
- gem 'rack-cors'
- bundle install
- uncomment out the chunk of code in 
# config/initializers/cors.rb
- change origin to your domain!