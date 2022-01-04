Rails.application.routes.draw do
  get 'dogs/:index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # EXPRESS JS 
  #  I want to create routes for cats
  #  GET    /cats <--- gets me all cats
  # GET     /cats/:id <--- gets me a specific cat
  # POST    /CATS <---- create a cat
  #  DELETE 
  #  Express JS ---------------
  #  app.use('/users', userRoutes)
  resources :cats
  resources :dogs

end
