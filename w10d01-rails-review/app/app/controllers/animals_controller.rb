class AnimalsController < ApplicationController

    def index
        # const templateVars = {a: 'Greetings, b: 'hello'}
        # res.render('index', templateVars)
        @a = 'Greetings'
        @b = 'hello world'
        puts "------------------------------------------------------"
        puts params
        @animals = Animal.all
        render json: @animals
    end

    def new

    end

    def create
        puts "------------------------------------------------------"
        puts animals_params
        Animal.create(animals_params)
        redirect_to '/animals'
    end

    private
    def animals_params
        params.require(:animal).permit(:type, :img)
    end

end
