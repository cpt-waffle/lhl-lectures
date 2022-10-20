Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # ENTRY POINT OF YOUR APP


  #  Convention OVER configuration
  #  RESTFUL conventions

  #  app.get('/thisismyroute', (req,res) => {...})
  resources :cats
  resources :owners do
    resources :cats
  end

  namespace 'admin' do
    resources :cats
  end

  # /owners/:owner_id/cats
  # /owners/:owner_id/cats/:cat_id
  # owners routes (expresss)
  # owners_cats (express)

  get '/about_us', to: 'pages#banana'

  # ....
  # const catsRoutes = require('./routes/cats')
  # app.use('/cats', catsRoutes)
  # ....
end
