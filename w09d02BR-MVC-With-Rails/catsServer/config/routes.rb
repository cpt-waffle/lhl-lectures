Rails.application.routes.draw do
  get 'pages/abouts'
  get 'pages/teams'
  get 'pages/privacy'
  get 'abouts/teams'
  get 'abouts/privacy'
  #  RESTFUL ROUTING for an enity called cats
  # app.use('/cats', catsRoutes)
  # app.get('/cats', (req, res) => )
  resource :dashboard, only: [:show]
  resources :cats
  #  A controller can be related to catsRoutes.js routes/
  # /users
  resources :users do
    resources :cats
  end


  namespace :admin do
    resources :users
  end
  # /users/:id/cats
  # /users/:id/cats/:id

  get '/abouts', to: 'pages#abouts'
  get '/teams', to: 'pages#teams'
  get '/privacy', to: 'pages#privacy'


end

# configuration
# const catsRoutes = require('./routes/catsRoutes');
# app.use('/cats', catsRoutes(db))
# convention