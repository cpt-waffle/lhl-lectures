Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :urls
  resource :contract
  get '/apple', to: 'fruit#apple'

  # nested resource example
  # users can see other peoples URLS, THEY cannot edit them though.
  resources :users do
    resources :urls
  end


  # users
  # users when they are logged in, they have a view where they can see their own URLS
  namespace :admin do
    resources :urls
  end
end


