class CarsController < ApplicationController

    def index
        @cars = Car.all
        puts "TEST TEST TEST TEST TEST"
        puts params
        # byebug
        @cars = @cars.where(make: params[:make]) if params[:make].present?
        @cars = @cars.where(make: params[:model]) if params[:model].present?
        @cars = @cars.where(make: params[:style]) if params[:style].present?
        @cars = @cars.where(make: params[:trim]) if params[:trim].present?
        @cars = @cars.where(make: params[:year]) if params[:year].present?

    end

    def show
        @car = Car.find(params[:id])
    end
end
