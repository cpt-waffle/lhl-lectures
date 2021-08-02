# THIS IS THE MOST IMPORTANT FILE OF RAILS
#  EVERYTHING STARTS FROM HERE!!!
Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # Rails CAN GENERATE YOU, restful routing
  # app.get('pets', (req,res))
  get '/pets', to: 'pets#show'
  # app.use('/cats', catsRoutes(db));
  resources :cats
  resources :bananas
  resources :dogs, only: [:index, :show]
end
