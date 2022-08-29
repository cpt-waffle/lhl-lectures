Rails.application.routes.draw do
  # resources :urls, except: %i[index]
  resources :urls
  resources :users, only: [:index, :create]
  get '/abouts', to: 'pages#abouts'
  get '/teams', to: 'pages#banana'
  # get '/abouts' => 'pages#abouts'
  
end

# ExpressJS

# const usersRoutes = require('./routes/users');
# #....
# app.use('/users', usersRoutes)