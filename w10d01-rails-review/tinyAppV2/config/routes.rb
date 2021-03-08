Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # RAILS STARTS FROM the Routes.rb file!!!
  # const urlRoutes = require('./routes/url');
  # app.use('/urls', urlRoutes(db)) 
  # rails creates you RESTFUL convention routes for you!!
  resources :urls
  # resource :dashboard # for a singular RESTFUL convention


end
