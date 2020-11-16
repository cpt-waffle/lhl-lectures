Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # app.get('/urls', (req,res) =>)
  resources :farms do
    resources :animals, only: [:index]
  end
  get '/about', to: 'pages#about'
  # testimony 
  # team
  # product
  #  PAGES CONTROLLER
  #  get '/about', to: 'pages#about'
end
