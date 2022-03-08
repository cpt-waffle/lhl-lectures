class CatsController < ApplicationController

    def index
        @cats = Cat.all
    end

    def show
        puts '----------------------'
        puts params[:id]
        puts '----------------------'

    end
end
