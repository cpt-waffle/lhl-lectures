Rails.application.routes.draw do
  # rails generates you a RESTFUL convention routes, based on the the word you give
  resources :urls, only: [:index, :new, :create, :destroy]
  # make an abouts_page ?
  # app.use('/about', pagesRoutes(db))
  get '/about', to: 'pages#about'
  get '/teams', to: 'pages#teams'

end
