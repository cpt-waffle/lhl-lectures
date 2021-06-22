### MVC With Rails (Breakout)

Today we talked about the basics of MVC and how we use it in rails.


#### MVC - What is it?

The `Model-View-Controller` is a pattern that separates an app into 3 parts:

 __Model__ - all data related logic. This can be fetching data from the database, creating queries, etc.

 __View__  - all the UI logic of the app. This is how the client/user will view the app itself.

 __Controller__ - the logic between the `Model` and the `View`. This is where specific buisness logic
 happens. Controllers get incoming requests, manipulate data ( using Models ), and interact with the 
 Views to render the final output to the client.  


So with that, where do we start? What is the beginning of rails?


### /config/routes.rb

This is the "entry" point of your app. This is where Rails decides which requests goes where:

You will see a file that looks like this

```ruby
Rails.application.routes.draw do
  # rails generates you a RESTFUL convention routes, based on the the word you give
end
```

And we can add routes to this file very easily with by writting

```ruby
Rails.application.routes.draw do
  # rails generates you a RESTFUL convention routes, based on the the word you give
  resources :urls, only: [:index, :new, :create, :destroy]
  # make an abouts_page ?
  # app.use('/about', pagesRoutes(db))
  get '/about', to: 'pages#about'
  get '/teams', to: 'pages#teams'
  post '/teams', to: 'pages#create'
end
```


The resources keyword creates us routes that are restful. For example:

resources :urls

gives us:

```
GET    /urls     = :index
GET    /urls/new = :new
POST   /urls     = :create
DELETE /urls     = :destroy
```

if we do not specify `only` and/or `except` it will create every restful route:

`resources :cats`

```
     cats GET    /cats(.:format)                         cats#index
          POST   /cats(.:format)                         cats#create
  new_cat GET    /cats/new(.:format)                     cats#new
 edit_cat GET    /cats/:id/edit(.:format)                cats#edit
      cat GET    /cats/:id(.:format)                     cats#show
          PATCH  /cats/:id(.:format)                     cats#update
          PUT    /cats/:id(.:format)                     cats#update
          DELETE /cats/:id(.:format)                     cats#destroy
```


### Controllers and Actions

Have a look at the output above last column:

```
cats#index
cats#create
cats#new
cats#edit
cats#show
cats#update
cats#update
cats#destroy
```

This notation stands for `controller#action`

The controller will be responsible for the request, and the action is the
`method` in that controller that will run when that request has come.

For this we need to generate us a controller.

`rails g controller cats`

Go into `app/controllers` folder and see that you have made a new file. The

Generator made a file that looks like this:

```ruby
class CatsController < ApplicationController
end
```

This is the file that will house in the methods/actions that will be responsible for requests.
For example, if we want to go to `GET /cats` we will need to make an `index` method because 
rails told us `cats#index`.

so we will make that:

```ruby
class CatsController < ApplicationController
  def index
    # any logic will go here
  end
end
```

Now we have one more thing we have to deal with the view.

### View

Views are what the client/user sees visually ( the ui ). In rails you dont get to specify which 
file you want to render (you can but you shouldn't if you have done everything correctly)

So the way figures out which view will need to be rendered is by your action/method name.


```ruby
  def index
    # any logic will go here
  end
```

Therefore there needs to be a view existing with the name:

```
index.html.erb
```

INSIDE of the `app/views/cats/`


### Models 

Models are the way to interact with the database. It will create us a blueprint for our tables.

We will create us a model with the command.

`rails generate model cat` <-- notice it has to be singular ( rails wants it this way )

this will generate us a file inside of `db/migrate/xxxxxxxx_create_cats.rb`

```ruby
class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|

      t.timestamps
    end
  end
end
```

This is how rails tracks every edition to the database, be that, a new table,
a new column for a table, a removal of a table, etc. This is used because:

- less merge conflicts when working on schema
- a history of what tables are created
- any person can run all migrations at once an create a duplication of the database.

we can 

```ruby
class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|

      t.timestamps
    end
  end
end
```

to add different columns to the table we will add.

```ruby
class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :age
      t.timestamps
    end
  end
end
```

