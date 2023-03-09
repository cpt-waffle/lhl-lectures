Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # Express //
  # const usersRotes = require('/routes/users');
  # ...
  # app.use('/users', usersRoutes);
  # 

  resources :cats, only: [:index, :create, :destroy]

  # nested resources
  resources :users do
    resources :cats
  end

  namespace :admin do 
    resources :cats
  end


  #  if i want to print cats for specific users what would be the route?
  #  GET /users/:id/cats  ------> what controller should i use for this????

  # Abouts page

  # resources :abouts, only: [:index]
  # --- generated a controller abouts
  # --- view index.html.erb

  # /abouts
  # /teams
  # /contant
  # /faq
  # etc

  # -------------- Custom Routes ----------------------
  get '/abouts', to: 'pages#abouts'
  get '/teams',  to: 'pages#banana'  # =>  --- hashrocket


end
