Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

    # server.js/app.js
    # 
    # const express = require('express');
    # const app = express();
    # // route importing..
    # const userRoutes = require('./routes/users');
    # ....
    # app.use('/users', userRoutes);

    resources :cats
    resources :users, only: [:index, :show] do
      resources :cats
    end

  # I want to display cats for each user
  #GET /users/:user_id/cats
  #  what do i call the controller?
  # usersCats controller
  # catsUsers Controller
  # just use the users controller 


    # static pages
    # about
    # contacts
    # faq
    # teams
    # etc 
    get '/about', to: 'pages#banana'

end
