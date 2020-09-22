class CarsController < ApplicationController
  def index
    @cars = Car.all

    @cars = @cars.where(make: params[:make]) if params[:make].present?
    @cars = @cars.where(model: params[:model]) if params[:model].present?
    @cars = @cars.where(style: params[:style]) if params[:style].present?
    @cars = @cars.where(trim: params[:trim]) if params[:trim].present?
    @cars = @cars.where(year: params[:year]) if params[:year].present?
  end

  def show
    @car = Car.find(params[:id])
  end
end
