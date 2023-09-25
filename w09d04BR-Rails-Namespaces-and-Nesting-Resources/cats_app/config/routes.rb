Rails.application.routes.draw do
  # const userRoutes = require('routres/users');

  # app.use('/users', userRoutes)
  resources :users
  resources :cats, only: [:index]


  # resources :abouts, only: [:index]
  get '/about', to: 'pages#banana'

end


# monday
#  active record

#  Store.all --> SELECT * FROM stores;
#  Categories.find(2) ---> SELECT * FROM categories where id =2 ;