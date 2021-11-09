Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # i have to make a route.....
  # and that route will have a req,res 
  # and it will send a view...

  # /cats GET
  # /cats POST
  # /cats/new NEW FORUM
  # ....
  # resources :_name_of_resource
  # this generates us RESTFUL routes for the cats resource name!
  # only: [:index] for controlling what to auto-generate!
  resources :cats, only: [:index, :show]
  # app.use('/cats', cats_routes(db));
  resources :dogs

  # a controller is needed to handle these routes
  # We make the controller with the command called:
  # rails generate controller _name_of_controller_


end
