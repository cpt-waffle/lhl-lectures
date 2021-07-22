Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :cats

  resources :owners, only: [:show] do
    resources :cats
  end

  resources :pages do
    resources :dogs
  end

end