### Agenda ###

- going over the MVC in ruby on rails
- creating a small project with all of the MVC patterns


#### Intro To Rails Tutorials 

- convention vs configuration 

configuration <-- Express 
convention    <-- Rails 

-----------------------------

Rails Follows this MVC 

M - Model
V - View 
C - Controller


Routes

config/routes.rb

# rake routes

## First Convention

In ExpressJS when you setup your routes, you setup your own file (userRoutes.js)
and you connected it to its own namespace using the `use`.

```js
app.use('/users', userRoutes(db))
```

All of this is done for you in rails

`Controllers` -- are a place where all of the route logic exists. 

How do i make a controller file?

`rails generate controller NAME`

`Views` -- are UI for the user to see ( your HTML files )
 
 We do not `res.render` instead we name the view same name as the
 method/action in our controller, and it will be auto rendered.


ACTIVE RECORD 
 Did you write an SQL ?
 `SELECT * FROM stores WHERE store id = 34;`

 ```ruby
 Store.find(34)
 Store.where(name: 'Chapters')
 ```

 `Models` -- (active record) == blueprints for database tables
in rails model names are singular

-- migrations -- TDLR  ---> git for database
    ^-- a record of a database alteration 
