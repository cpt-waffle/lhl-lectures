Rails.application.routes.draw do
  get 'cats/index'
  get 'cats/show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # a resources thats actually a collection
  resources :cats
  # a single resource
  resource :dashboard

  resources :owners do
    resources :cats
  end

  namespace :admin do
    resources :cats
  end

  # Feature - Abouts Page!!!!!
  # resources :abouts, only: [:index]
  # resources :teams, only: [:index]
  # resources :testimonials, only: [:index]
  # resources :mission, only: [:index]
  #  CUSTOM ROUTING
  get '/abouts', to: 'pages#abouts'
  get '/teams', to:  'pages#teams'

#  I want a route where i pick a user, and it gives all the cats they own...
#  /cats
#  /cats/:id

end
