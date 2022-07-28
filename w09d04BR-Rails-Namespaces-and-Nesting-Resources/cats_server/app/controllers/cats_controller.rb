class CatsController < ApplicationController
  # ___routes.js
  # userRoutes.js
  # widgetRoutes.js 
  # const index = (req, res) => {... }
  # app.get('/', (req, res) => {
    # res.render('urls_index', {....})
  # })
  def index
    # pg.query(SELECT * FROM CATS)
    # @owner = Owner
    @owner = nil;
    @cats = Cat.all
    
    if params[:owner_id]
      @owner = Owner.find(params[:owner_id])
      @cats = @owner.cats
    end
    puts "-----------------------"
    puts params
    puts "-----------------------"
  end
end
