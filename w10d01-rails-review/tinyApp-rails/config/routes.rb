Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'banana', to: 'pages#banana'
  # creates all of the RESTFUL routes for a specific resource
  resources :urls
  resources :users, only: [:index, :create]


  # Express Server
  # ^ app.js
  # const urlsRoutes = require('/routes/urls');
  # ...
  # app.use('/urls', urlsRoutes(db));
end


#  Whats a model?
#  Why did we not WRITE any SQL in Ruby on Rails?

# A class with a bunch of SQL methods built in ( we dont see them! )
#  it is there to do basic querying (and even advanced ones )
#  maintainability
#   Model (ORMs) slight performance decrease

# Migrations
# Models