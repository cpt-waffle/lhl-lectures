Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :urls, only: [:index, :new, :create]
  resources :users

  resource :settings

  # resources :abouts, only: [:index]
  # resources :teams, only: [:index]
  # resources :testimonials, only: [:index]
  # resources :more_info, only: [:index]

  get '/about', to: 'pages#about'
  get '/teams', to: 'pages#teams'
  get '/testimonials', to: 'pages#testimonials'
  get '/info', to: 'pages#info'

end
