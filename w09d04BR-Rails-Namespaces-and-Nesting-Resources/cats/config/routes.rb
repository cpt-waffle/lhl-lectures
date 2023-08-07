Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # app.js /server.js

  # const express = require('express');
  # const app = express();
  # 
  # // routes
  # const catsRoutes = require('./routes/cats');
  # ...
  # app.use('/cats', catsRoutes);


  # resources
  resources :cats
  resources :users, only: [:show, :index] do
    resources :cats
  end

    # /cats ---> GET /Cats      app.get('/cats')   -->   /users/:id/cats
  # /users/:id/cats 
  #  what controller is responsible for this route?

  # rails can reuse routes (controller logic)

  # from scratch 
  get '/about', to: 'pages#about'
  get '/teams', to: 'pages#teams'
  get '/contact', to: 'pages#contact'

end
