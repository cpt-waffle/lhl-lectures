Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # Express

  # ...
  # const urlsRoutes = require('./routes/urls');
  # ...
  # app.use('/urls', urlsRoutes)

  resources :urls
  # resources :urls, except: [:destroy, :edit, :update]
  resource :dashboard

  # nested resources


  # namespaces
  namespace :admin do 
    # /admin/urls/..
    resources :urls
  end

  # # nested-resources 
  resources :users do
    resources :urls
  end

  get '/contact_us', to: 'pages#banana'
  #   /teams   to: 'pages#teams'
  #   /FAQ
  #   /info
  #   ..etc

  # GET /urls
  # POST /urls
  # GET /urls/new
  # PUT/PATCH /urls/:id
  # GET /urls/:id
  # DELETE /urls/:id

end
