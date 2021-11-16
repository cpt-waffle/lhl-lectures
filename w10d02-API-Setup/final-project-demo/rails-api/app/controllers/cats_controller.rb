class CatsController < ApplicationController
    def index
        @cats = Cat.all
        # send data in either JSON or XML format
        render json: @cats
    end
end
