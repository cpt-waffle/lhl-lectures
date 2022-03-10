Rails.application.routes.draw do
  get 'cats/index'
  get 'cats/new'
  get 'cats/show'
  get 'pages/abouts'
  get 'pages/teams'
  get 'pages/testimonials'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :cats

# IF I Have Owners...
#  and cats...
# what would be the route
# to see all the cats for a specific Owner?

#  owners/:id/cats
#  WhAT WOULD BE THE CONTROLLER FOR THAT??!
 resources :owners do
  resources :cats
 end

 namespace :admins do
  resources :cats
 end

  #  Create an abouts page
  #  generate a controller called Abouts
  #  made an index --- 
  #  index.html.erb

  # Create a Teams Page     --- Teams Controller
  # Create a Product Desc Page   -- Product Controller
  # Create a testimonials       -
  # Create a about_us page

  # Custom ROUTING
  get '/abouts', to: 'pages#abouts'
  get '/teams', to: 'pages#teams'
  get '/testimonials', to: 'pages#testimonials'

end
