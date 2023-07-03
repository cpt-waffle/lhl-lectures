Rails.application.routes.draw do

  # ExpressJS

  # const urlsRoutes = require('/routes/urls');
  # app.use('/urls', urlsRoutes)

  resources :urls

  resource :dashboard

  # abouts page
  # /abouts ==> html
  # resources :abouts, only: [:index]
  # abouts_controller --> def index 

  # /about
  # /teams
  # /contact_us
  # /info

  get '/about', to: 'pages#about'
  get '/teams', to: 'pages#teams'
  get '/info', to: 'pages#banana'


end
