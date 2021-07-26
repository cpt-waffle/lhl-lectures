Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :urls
  get '/register', to: 'sessions#new'
  resources :sessions, only: [:create]
end
