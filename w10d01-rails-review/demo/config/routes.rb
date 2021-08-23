Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :urls, except: [:destroy]
  resource :settings

  # About Page 
  # resources :abouts, only: [:index] # abouts controller
  get '/about', to: 'pages#about'
  # teams
  # testimonials
  # rules
  # FAQ
end
