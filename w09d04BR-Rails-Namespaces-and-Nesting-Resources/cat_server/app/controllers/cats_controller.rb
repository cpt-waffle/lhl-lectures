class CatsController < ApplicationController
  def index
    @cats = Cat.all
    if params[:owner_id] 
      @user = Owner.find(params[:owner_id])
      @cats = @user.cats
    end
  end

  def show
  end
end
