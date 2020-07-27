Rails.application.routes.draw do
  # resources :stories
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :authors do
    resources :books, only: [:index, :show]
  end
end
