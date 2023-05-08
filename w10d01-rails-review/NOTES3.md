-- Agenda --

- Rails review - 

- routes
- controller
- model
- views
- seeds
- migrations
- forms 
- installing packages
- API (if lets say you have a frontend already built)


## Reviews

## convention vs configuration


## To create a rails server

```
rails new
<!-- to start -->
rails s
rails s -b 0.0.0.0
```

## MVC

- Model
- View
- Controller


## Routes.rb File

Where all routes exist and where the files decide what logic file will responsible for the request

## Controller

The logic file. When the route is hit, this file will run and perform route logic, which will trigger a response back to the client

## Model 

A class, that has methods to interact with a database
usually, the class is made with the same name as a table 
(for convineince )