Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  # Express JS
  # const usersRoutes = require('./routes/users');
  # ....
  # const app.use('/users', usersRoutes);
  
  resources :users, only: [:index, :show] do
    resources :cats, only: [:show, :index]
  end
  resources :cats, except: [:destroy, :show, :update, :new]

# /resources

  resource :dashboard

end
