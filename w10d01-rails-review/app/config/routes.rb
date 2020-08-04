Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :animals

  resources :categories do
    resources :animals
  end

  namespace :admin do
    resources :animals
  end


  get '/about', to: 'pages#about'
end
