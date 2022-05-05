Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :owners do
    resources :cats
  end

  resources :cats

  # owners have many cats 
  #  i want routes that specify the owner and their cats
  #  /owners/:id/cats < GET all cats 
  #  /owners/:id/cats/:cat_id 

  #  WHAT controller am i going to use for these specific routes?
  # owners_cats_controller
end
