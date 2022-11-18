Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #  app.get('/', req, res)
  #  router.get('/')
  #  app.use('/cats', catsRoutes))
  resources :users do # users controller =-->
    resources :cats
  end

  # admin/products   delete and add
  # products/        show all or show single

  namespace :admin do
    resources :cats
  end


  get '/about', to: 'pages#about'
  get '/team', to: 'pages#team'
  get '/FAQ', to: 'pages#faq'


# /about
# /team
# /slogan
# /contact_us
# /our_mission
# /origins
# /FAQ

  # /users/:id/cats ### --> ???? 

  resources :cats

end
