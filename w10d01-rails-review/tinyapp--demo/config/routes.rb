Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  # Expresss 
  # const urlsRoutes = require('routes/urls');
  # app.use('/urls', urlsRoutes);

# index, new, create, show, destroy, edit, update
  resources :urls, only: [:index, :new, :create]
  resource :dashboard

  get '/teams', to: 'pages#apple'

  # admin/products

end
