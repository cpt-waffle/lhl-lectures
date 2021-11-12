Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :cats, only: [ :index ]
  resources :owners, only: [ :show ] do
    resources :cats, only: [ :index ]
  end

  # EXPRESS JS
  #1  app.use('/cats/', catsRoutes(db));
  #2  app.use('/owners/', ownersRoutes(db));

  # owners/owner_id/cats <--------------

  #1 --------- catsRoutes.js
  # /cats 
  # router.get('/', req res => {
    # pg.query('select * from cats)...
    # req res....
  # })


  #2 --------- ownersRoutes.js
  # router.get('/:owner_id/cats', req res => {
    # pg.query('select * from cats JOIN owners)...
    # req res....
  # })
# --------------------------------------------


  # Create the Abouts Page
  # resources abouts, only: [:index]
  # rails generate controller abouts
  # def index ....

  # our mission page
  # contact us
  # teams
  # promotional pages 
  ###----------------- CUSTOM ROUTING ------ ###
  get '/abouts' ,  to: 'pages#abouts'
  get '/teams',    to: 'pages#teams'
  get '/faq',      to: 'pages#banana'

end
