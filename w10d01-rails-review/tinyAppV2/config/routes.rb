Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :urls, only: [:index, :create, :new]
  # resource :dashboard
  # resources :abouts, only: [:show]
  # Can we make a custom route with rails? is it possible?
  get '/about', to: 'pages#about'

  resources :users do 
    resources :urls, only: [:index]
  end

  namespace :admin do
    resources :urls
  end

end
