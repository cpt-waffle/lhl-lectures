Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :cats
  resources :owners do
    resources :cats
  end

  namespace :admin do
    resources :cats
  end

  get '/banana', to: 'pages#banana'
  get '/abouts', to: 'pages#abouts'
  get '/teams',  to: 'pages#teams'
  # Express JS

  # const catsRoutes = require("./routes/cats");
  # app.use('/cats', catsRoutes(db));

  # /abouts
  # /teams
  # /testimonials
  # /contact_us
  # etc
end
