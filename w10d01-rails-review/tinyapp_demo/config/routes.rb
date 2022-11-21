Rails.application.routes.draw do
  # Express 
  # const urlsRoutes = require('routes/urls');
  # app.use('/urls', urlsRoutes);

  # Auto Gen using the word Resource
  resources :urls, only: [:index, :new, :create, :show]
  resource :dashboard

  get '/about', to: 'pages#banana'
  #    /teams
  #    /mission
  #    /contact_us
  #    etc
end
