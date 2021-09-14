Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #THIS IS THE ENTRY POINT FOR YOUR APPLICATION
  resource :dashboard
  resources :cars
  get '/wierdroute', to: 'cars#pineapple'
  # this file is equivlent to express 
  # app.use('')

end
