class CatsController < ApplicationController
  def index
    @cats = Cat.all
    if params[:owner_id]
      @owner = Owner.find(params[:owner_id])
      @cats = @owner.cats
    end
    puts "-------------------------"
    puts params # ExpressJS req.params, req.body, req.query, other information of req
    puts "-------------------------"

    # res.render('cats_index', templateVars);
  end
  
end


