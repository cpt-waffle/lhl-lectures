Rails.application.routes.draw do
  resources :cars
  resources :short_urls
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :farms

  resources :about, only: [:index]
end
