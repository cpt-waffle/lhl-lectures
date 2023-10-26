Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # ///
  # const userRoutes = require('routes/users');
  # //..
  # app.use('/users', userRoutes);

  resources :users do
    resources :cats
  end

  namespace :admin do 
    resources :cats
  end


  resources :cats, only: [:index]

  # resources :abouts, only: [:index]
  # teams
  # faq
  # locations


  get '/about', to: 'pages#about'

end
