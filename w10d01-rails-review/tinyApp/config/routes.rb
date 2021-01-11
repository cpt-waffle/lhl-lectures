# server.js // express
# app.use('/urls', urlsRoutes(db));
# 
Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :urls, only: [:index, :show, :create, :new]

  resources :users do
    resources :urls
  end

  # make your own route without using the resource clause
  get '/apple', to: 'pages#apple'

  namespace :dashboard do
    resources :urls
  end

  

end
