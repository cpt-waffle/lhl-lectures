Rails.application.routes.draw do
  resources :cats, only: [:index]
  
  # nested resources
  resources :users do
    resources :cats
  end

  # namespaces
  # Products --> show, index


  # Admin/Products --> index, show, create, destroy
  namespace :admin do
    resources :cats
  end


  # user cats
  # /users/:id/cats
  # UserCats
  # CatUsers
  # Users
  # Cats


  # GET /dashboard/:id
  resource :dashboard

  # ----------  Static Pages ----------------
  # Feature, abouts page
  # resources :abouts, only: [:index]
  # resources :teams, only: [:index]
  # resources :faq, only: [:index]

  # ---------- Custom Routes ----------------

  get '/abouts', to: 'pages#abouts'
  get '/teams', to: 'pages#banana'
  get '/faq', to: 'pages#apple'



end
