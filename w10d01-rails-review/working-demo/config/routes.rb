Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :urls, only: [:index, :new, :create]
  #    GET /urls              urls#index
  #                         controller#action
  resource :settings

  get '/home', to: 'pages#home'
end

# app.js or server.js