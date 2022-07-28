Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # app.js # express
  #  only the part where you wrote app.use()
  get '/banana', to: 'pages#bananas'
  resources :owners do
    resources :cats
  end
  resources  :cats,  only: [:index]
end
