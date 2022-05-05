class CatsController < ApplicationController
  #  /cats
  #  /owners/:id/cats
  def index
    # EXPRESS req.params {id: '', shortURL: '' restaraunt_id: ''}
    #         req.body   {}
    if params[:owner_id]
      @owner = Owner.find(params[:owner_id])
      @cats =  @owner.cats
    else
      @cats = Cat.all
    end

    # res.render('/index', {cats: cats})
  end
end
