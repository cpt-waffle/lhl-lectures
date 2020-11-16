class FarmsController < ApplicationController
    def index
    # app.get('/farms', (req, res => ) {
    # const templateVars = {....}
    # })
    @farms = Farm.all
    render json: @farms
    end

    def show
        puts params[:id]
        @farm = Farm.find(params[:id])
        @animals = @farm.animals
        render json: @animals
    end
end
