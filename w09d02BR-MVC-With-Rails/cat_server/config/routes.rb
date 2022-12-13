Rails.application.routes.draw do
  get 'dogs/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # I want to make /cats RESTFUL
  # GET   /cats
  # GET   /cats/:id
  # POST  /cats
  # GET   /cats/new
  # POST  /cats/:id
  # POST  /cats/:id/delete

  # Express 
  # app.js
  # const catsRoutes = require('./routes/cats');
  # ....
  # app.use('/cats', catsRoutes);

  # 

  resources :cats



end
