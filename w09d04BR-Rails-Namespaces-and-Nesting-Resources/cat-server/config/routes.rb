Rails.application.routes.draw do
  # where you define your file routes
  # and which file is responsible for the route namespace

  # ExpressJS
  # const users = require('./routes/users');
  # ...
  # app.use('/users', users);

  resources :users, except: [:destroy, :show, :update, :new] do
    resources :cats,  only: [:index]
  end
  resources :cats,  only: [:index]
  # /users/:id/cats

  namespace :admin do
    resources :cats
  end

  # abouts controller feature
  get '/about', to: 'pages#about'
  get '/teams', to: 'pages#teams'
  get '/faq', to: 'pages#faq'

end
