class CarsController < ApplicationController
    def index
        @cars = Car.all
        if params[:make]
            @cars = @cars.where(make: params[:make])
        end
    end

    def show
        puts "HELLO WORLD"
        puts params[:id]
        @car = Car.find(params[:id])

    end
end
