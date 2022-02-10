### How to setup a rails API (with postgresql)

This step by step guide will help you setup a rails API.

### Setting up Repo

Make a folder that will be your project name and `cd` into it wit the following commands.

```sh
mkdir __project_name__  # your project name
cd __project_name__     # your project name
```

We will start by initiating `git init` so that we can keep track of our changes.

In the project folder run the command:

```sh
# while inside __project_name__
git init
```

We will now generate the entire `rails server` with one command:

```sh
rails new --api --database=postgresql server
```

This should generate you the entire rails backend. Go inside the `server/` folder and delete the default initialized `git`

```sh
cd server 
rm -rf .git
```

![1-rails-server](https://raw.githubusercontent.com/cpt-waffle/lhl-lectures/master/w10d04-Final-Project-Kickoff/rails-api/screenshots/1-rails-server.png)

## Setup Postgres 

Everything is already installed.  Go to `config/database.yml` make a copy of it and call it ``config/database.yml.example` You will need to add `db` credentials here as follows:

```yml
############  database.yml
default: &default
  adapter: postgresql #
  encoding: unicode #
  username: labber #
  password: labber #
  host: localhost #
  port: 5432 #

  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>

development:
  <<: *default
  database: server_development #<---- name your database

test:
  <<: *default
  database: server_test #<---- name your database


production:
  <<: *default
  database: server_production  #<---- name your database
  username: server
  password: <%= ENV['SERVER_DATABASE_PASSWORD'] %>

```

make sure you create the `DATABASE` with the name that rails is using ( set up your own in postgres)

![2-rails-on](https://raw.githubusercontent.com/cpt-waffle/lhl-lectures/master/w10d04-Final-Project-Kickoff/rails-api/screenshots/2-rails-on.gif)

### Setup a Route and Database

We will make a quick example of how to setup a migration, route, model, and controller.

Run the command:

```sh
rails generate model user
```

Go into `db/migrate/XXXXXXXXX_create_users.rb` and add this code:

```ruby
class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password
      t.timestamps
    end
  end
end
```

Then go into `db/seeds.rb` and add this code for some seeds:

```ruby
puts "Create users!"
User.destroy_all
user_one = User.create(email: 'v@k.ca', password: '123456')
user_two = User.create(email: 'ab@c.ca', password: '123456')
user_three = User.create(email: 'john@gmail.ca', password: '123456')
```

run the migration with:

```sh
rake db:migrate
```

and run the seeds with:

```sh
rake db:seed
```

Now go into `config/routes.rb` and lets make a new user route but only for `GET /users`

```ruby
Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:index]
end
```

Create a controller with the following command:

```ruby
rails generate controller users index
```

and inside of the `app/controllers/users_controller.rb` edit the the `index` action to:

```ruby
class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end
end
```

![3-rails-done](https://raw.githubusercontent.com/cpt-waffle/lhl-lectures/master/w10d04-Final-Project-Kickoff/rails-api/screenshots/3-rails-done.gif)
