class AnimalsController < ApplicationController
    def index
        # req.params.????
        puts "HELLO WORLD >>>>>>>>>>>>>>>."
        farm_id = params[:farm_id]
        @animals = Farm.find(farm_id).animals
        render json: @animals
    end

end
