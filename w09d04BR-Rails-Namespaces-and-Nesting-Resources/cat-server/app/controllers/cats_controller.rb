class CatsController < ApplicationController
  # const index = (req, res) => {
    # /...
    # const templateVars = {};
    # return res.render('index', templateVars);
  # }

  # app.get('/cats', index);

  def index
    puts "-----------------["
    puts params
    puts "-----------------["
    @cats = Cat.all
    # if params[:owner_id]
    #   @owner = Owner.find(params[:owner_id])
    #   @cats = @owner.cats
    # else 
    #   @cats = Cat.all
    # end

    render json: @cats
  end
end
