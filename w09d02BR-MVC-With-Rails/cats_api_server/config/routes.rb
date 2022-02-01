Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # Cats Routes GET POST DELETE EDIT --- RESTFUL
  # GET      /cats             <--- get all the cats
  # POST     /cats            <--- to save a cat
  # GET      /cats/:cat_id
  # DELETE   /cats/:id

  # ExpressJS
  # app.use('/cats', ____)
  # app.use('/dogs', ____)
  resources :cats # /cats ---> cats_controller.rb
  resources :dogs

end
