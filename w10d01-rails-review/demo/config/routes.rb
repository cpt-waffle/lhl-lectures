Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :farms

  get '/about', to: 'about#index'
  # get '/about', to: 'pages#about'
  # get '/testimony', to: 'pages#testimony'
  
end
