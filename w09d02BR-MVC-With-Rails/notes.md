### Agenda ###

- going over the MVC in ruby on rails
- creating a small project with all of the MVC patterns


## Convention vs Configuration

### Express -- configuration

-- 1 file,
-- installed the correct modules,
-- set up routes, 
-- set up database connection
-- decide on file names, file types, file structure, etc

### Rails -- convention

-- we have rules
-- we have to follow those rules, or else the framework will not work... :(


### To run the project

```
rails s
```

```
rails server
```

```
rails s -b 0.0.0.0
```


### MVC Framework

-- Routes

`/config/routes.rb`

is the entry file for your app!
We can make routes here, with the command:

`resources :cats` as example

- C
### Controller

Where your route logic will live!
this is where you will write most of your code, for actions
when a route has been hit

`app/controllers/`

- V
### Views
A view, is UI that will be sent to the client/user to interact with.


- M

### Model

A class, that has methods, to interact with the database
The class/classes usually has the same names as your database tables

SELECT * FROM stores;

Store.all

Store.first.employees;

SELECT * FROM stores, JOIN employees ON 
stores.id = employees.store_id;


## Sometimes, when queries get too hardcore,
ORM lose performance
Object Resource Manager
