Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # entry point of the your app
  # this file will be ran/looked upon first
  # EXPRESS-JS
  # /cats GET / POST /  GET /:id   DELETE
  # app.use('/cats', catsRoutes) ----> express.Router app.get('/')
  # configuration
  resources :cats
  resources :dogs
end
