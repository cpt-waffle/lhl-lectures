Rails.application.routes.draw do
  # 3ish ways

  # expressJS

  # cont urlsRoutes = require('routes/urls');...
  # app.use('/urls', urlsRoutes)


  resources :urls, only: [:index, :new, :create]

  resource :dashboard
  resources :users


  get '/banana', to: 'urls#banana'
end
