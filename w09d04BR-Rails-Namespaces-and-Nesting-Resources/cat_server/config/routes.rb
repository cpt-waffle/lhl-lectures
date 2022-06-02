Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  #  Express JS

  # app.use('/banana', pagesRoutes)
  
              #      Controller#Action ( method )
  get '/banana', to: 'pages#banana'
  # i want all cats routes 
  # i want it to be restful
  #  Express JS
  # app.use('/cats', catsController)
  resources :cats

  #  nested routes 
  resources :owners do
    resources :cats
  end

  namespace :admin do
    resources :cats
  end

end


#  I want to have routes for a owner that shows all the cats 

#  /owners
#  /owners/:id
#  /owners/:id/cats
#  Express JS
#  app.use('/owners', ownersRoutes())