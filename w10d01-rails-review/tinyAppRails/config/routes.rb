Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :urls, only: [:index, :new, :create]
  resources :settings, except: [:destroy]

  # Create the abouts page !
  # Make a controller AboutsController 
  #  index view --->

  #  /testimonials
  #  /teams
  #  /newletter
  #  /about
  #  /whatwedo
  #  NESTED ROUTING -------------
  #  /pages/teams

  resources :dogs
  resource :cats


  resource :pages, only: [ :index ] do
    get '/teams', to: 'pages#teams'
    # resources :cats
  end

  get '/about', to: 'pages#about'
  get '/newletter', to: 'pages#apples'
end

# ExpressJS

# requires()
# const app = express();
#  app.use("/users", userRoutes)
