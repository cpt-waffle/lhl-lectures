Rails.application.routes.draw do
  resources :posts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :cats

  resources :urls, only: [:index, :new, :create]
  # resource :dashboard
  get '/about', to: 'pages#about'

  resources :users do
    resources :urls
  end
end
