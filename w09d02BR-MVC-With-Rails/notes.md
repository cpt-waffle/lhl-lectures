### Agenda ###

- going over the MVC in ruby on rails
- creating a small project with all of the MVC patterns
- look into jungle-rails as an example ? ( if we got time )


---------------- 

MVC Pattern


M - model, models   ----- databases (connections, and quaries, etc)
V - views,          ----- what does the user see? (html, css, emails)
C - controller      ----- logic of what happens during the req (app.get())

M - 4
V - 5
C - 8


Why this split? Why do we have these 3 letters?

 - seperation of concerns
 - its faster (for rails, rapid deployment)
 - it makes your life harder (in the beginning)
 - modular reasonings

 ActiveRecord

pg  npm

pg.query("SELECT * FROM users JOIN pets ON pets.user_id = user.id WHERE user_id = 3")

 ActiveRecord
  - Models
      ^-- a blueprint of a table that you have in your database



User.find(3).pets()