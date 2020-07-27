Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :memes
  get '/about', to: 'pages#about'
  resources :users do
    resources :memes, only: [:index, :show]
  end


  namespace :admin do
    resources :settings
  end
end
