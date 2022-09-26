Rails.application.routes.draw do
  resources :urls
  resources :users, only: [:index, :create] do
    resources :urls
  end
  get '/about', to: 'pages#banana'
  # ExpressJS

  # routes requires
  # const urlsRoutes = require('./routes/urls');
  # ....
  # ....................................
  # app.use() //
  # app.use('/urls', urlsRoutes);


end
