Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources generates us pluralized routes
  # with a way to acess a specific resource (:id)
  resources :urls, only: [:index, :new, :create]
  # /settings
  # /dashboard
  resource :settings, except: [:destroy]
  # Creating custom routes ---

  get '/about', to: 'pages#apple'

  
end
