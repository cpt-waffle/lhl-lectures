Rails.application.routes.draw do
  get 'banana/banana'
  resources :posts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # entry point to your rails app
  resources :urls, only: [:index, :new, :create]
  # const urlsRoutes = require('./routes/urls');

  # app.use('/urls', urlsRoutes) 
  get '/about_us', to: 'pages#about'
  
  resource :dashboard
end
