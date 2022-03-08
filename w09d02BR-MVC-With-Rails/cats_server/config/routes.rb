Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # midterms
  # route splitting
  # routes/usersRoutes.js
  # routes/catsRoutes.js
  # -------------------------
  # app.use('/users', userRoutes());
  # app.use('/products', producRoutes());
  # get '/users/:id'. to: 'users#show'

  # RESTFUL conventions for /users
  # GET users/:id
  # GET /users/:new
  # GET /users/
  # DELETE /users
  # put/patch /users/:id
  # POST /users
  resources :cats
  resources :users
  # --------------------------------
  resource :dashboard

end
