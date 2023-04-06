Rails.application.routes.draw do
  # express js
  # const userRoutes = require('./routes/users');
  # app.use('/users', userRoutes);


  resources :cats

#  users/:id/cats
#  What controller will be used to house these nested routes?
#  user_cats_routes.rb?
#  and how im going to create these routes using restful conventions?

# nested resources
  resources :users do
    resources :cats
  end


# namespaces
namespace :admin do
  # /admin
  #  -----> users
  # -----> cats
  # -----> student_records
end


  get '/about', to: 'pages#about'
end
