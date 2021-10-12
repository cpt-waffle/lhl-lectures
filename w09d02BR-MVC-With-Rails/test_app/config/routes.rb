Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # cats needs a SEE ALL CATS ROUTES gET /cats
  # SAVE a cat POST /cats
  # specific cat view /cats/:id

  # app.use('/cats', catsRoutes(db))
  resources :cats
  resources :dogs
  resource :dashboard
  get '/testimonials', to: 'cats#testimonials'
end
