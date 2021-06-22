# 

Rails.application.routes.draw do
  # rails will show you the routes it generates by running:
  # rake routes
  # app.use('/cats', catsRoutes(db));
  resources :cats
end

#  rails generate controller ____