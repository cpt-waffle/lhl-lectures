Rails.application.routes.draw do
  # const urlsRoutes = require('./routes/urls');

  # app.use('/urls', urlsRoutes);

  resources :cats

  # i want to display all the cats for specific owners
  # GET /users/:id/cats

  #  ^ what controller Am i going to use
  # 1 cats_controller
  # 2 users_controller
  # 3 make a new controller for this relationship

  resources :users do
    resources :cats

  end

  namespace :admin do
    resources :cats
  end



  resource :setting

  # Abouts Page
  # rails generate controller abouts -------->  def index...
  # /teams
  # /faq
  # /rules
  # /conduct
  # /policy
  # ...

  get '/about', to: 'pages#banana'
  get '/teams', to: 'pages#teams'
  get '/teams', to: 'pages#policy'
  


end
