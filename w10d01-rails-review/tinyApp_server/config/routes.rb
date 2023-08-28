Rails.application.routes.draw do
  # ExpressJS

  # const urlRoutes = require('/routes/urls');
  # app.use('/urls', urRoutes);

  resources :urls, only: [:index, :new, :create]
  resource :dashboard, except: [:new]

  get '/about', to: 'pages#about'


end
