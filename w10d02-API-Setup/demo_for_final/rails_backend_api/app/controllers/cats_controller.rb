class CatsController < ApplicationController
    def index
        @cats = Cat.all
        # express <--- Res.render
        # res.json({})
        render json: @cats
    end
end
