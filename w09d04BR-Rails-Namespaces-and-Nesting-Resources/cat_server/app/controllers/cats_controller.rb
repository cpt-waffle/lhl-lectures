class CatsController < ApplicationController
  # catsRoutes.js
  # app.get('/',  index )

  # const index = (req, res) => {
    # templateVars = {};
    # res.render('cats_page', templateVars);
  # }

  def index
    @owner = nil
    @cats = Cat.all
    if params[:owner_id]
      @owner = Owner.find(params[:owner_id])
      @cats = @owner.cats
    end
  end
end
