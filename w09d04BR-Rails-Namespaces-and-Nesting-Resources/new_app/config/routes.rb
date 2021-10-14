Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :cats, only: [ :index ]
  #  /cats     :index
  #  /cats/:id :show
  resources :owners, only: [ :show ] do
    resources :cats, only: [ :index ]
  end 
  # Exercise: Create Abouts Page??
  # resources abouts, only: [:index]
  # AboutsController
  # /teams
  # /testimonials
  # /motivation
  # /faq
  # /whatis
  # ---------- TASK if I want to see the owner and their cats
  #  What would be the route for that RESTFUL????
  get '/teams', to: 'pages#teams'
  get '/testimonials', to: 'pages#testimonials'
  get '/motivation', to: 'pages#bread'
  get '/faq', to: 'pages#faq'

end
