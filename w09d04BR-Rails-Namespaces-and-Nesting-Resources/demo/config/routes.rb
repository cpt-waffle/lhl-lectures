Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :cats, only: [:index]

  resources :owners, only: [:show] do
    resources :cats
  end

  namespace :admin do
    resources :cats
  end


  get '/aboutus', to: 'pages#aboutus'
  get '/teams',   to:  'pages#teams'



  # /students - let me see all of the students in my cohort route
  # admin/students  - let me see all the students, BUT I WANT POWER TO add, remove, and move students in this cohort

end

