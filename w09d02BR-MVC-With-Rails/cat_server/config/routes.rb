Rails.application.routes.draw do
  get 'dogs/index'
  get 'dogs/create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # give all restful convention routes for cats

  # GET  /cats
  # GET  /cats/:id
  # POST /cats
  # GET  /cats/new
  # POST /cats/:id
  # POST /cats/:id/DELETE

# Express Version
# 
# const catsRoutes = require('./routes/cats');
# ....
# app.use('/cats', catsRoutes);

  resources :cats
  resources :dogs, only: [:index, :create]

end
