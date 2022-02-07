Rails.application.routes.draw do
  get 'users/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # EXPRESSJS
  # app.use('/urls', urlRoutes(db));
  # app.use('/users', userRoutes(db));
  
  resources :urls, only: [:index, :new, :create]
  resources :users, only: [:index]
  resource :dashboard

  get 'about', to: 'pages#about'

end
