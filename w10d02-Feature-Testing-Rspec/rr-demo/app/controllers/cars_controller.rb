class CarsController < ApplicationController
  def index
    @cars = Car.all
  end
end
