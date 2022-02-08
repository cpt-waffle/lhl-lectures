class CatsController < ApplicationController
  def index
    @cats = Cat.all #SELECT * FROM cats;
    render json: @cats
  end
end
