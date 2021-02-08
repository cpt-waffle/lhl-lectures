--- Rails Review ---

-- Routes
-- MVC
-- Controller
-- Views
-- Models
-------- BREAK
-- nested routes and namespaces
-- BONUS talk about react + rails configuration


### What is Rails?

it is a framework (web)

Express vs Rails

- js ruby
- Rails is Opinionated 
- Convention over Configuration
- no callbacks in rails 
- rails is implicit vs express is explicit

Express -- Everything needed to be configured.
Rails   -- because of convention, alot of things are configured for you (RAILS MAGIC)

TLDR
If you follow the rules of rails, rails will play nice :)
If you try to make it do something alittle to custom, it will hate you, and probobly
wont work for you >:(


Starting with Rails

-- Routes !!!!!

### Routes

config/routes.rb

Routes file contains all the definitions of all the routes that your site has.
it also auto-generates you restful convention routes with the resources/resource tag

### Controller

Is the logic of your route

```js
app.get('/urls', (req,res) => {
    //.....
})
```

### View

Whatever gets sent out to the client/user
Name of the view file must correspond with the name of the method inside of the controller
that corresponds to a specific route in the routes.rb


### Model

A model is a blueprint of a table inside of your DB.
A model also has some predefined methods to acess the database (active record)
You dont have write SQL anymore but rather use those methods.

SELECT urls.id, urls.shortURL, urls.longURL, user.id, user.name
FROM urls JOIN .....

User.find(1).urls

  ## Migrations
   - why tho? whats the point of migrations? 
   - hoarding
   - change and manipulation
   - rollbacks

It tells you when you should run your mirgations

-- SQL FILE --
SCHEMA.sql 
DROP TABLE __ IF EXISTS
CREATE TABLES


When running your migrations a SCHEMA.rb file gets __auto-generated__

DO NOT EVER ALTER/TOUCH SCHEMA.RB



## Rolling back vs making a new migration

#### Rolling back
IF you are on a branch, you can rollback and alter your migrations...
BUT
THE SECOND IT GOES INTO MASTER.. YOU CAN NEVER TOUCH IT AGAIN ( HISTORY )

### Making a new migration
and this is to preserve the old history of all our or DB tables/

-----------------------------------------------------------------

ALWAYS make a new migration if the top makes no sense.
