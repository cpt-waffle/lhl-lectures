class FarmsController < ApplicationController
    def index

        # app.get('/farms', (req, res) => {
            # const templateVars = { ... }
            # res.render('farms_index', templateVars) 
        # })
        @farms = Farm.all
        render json: @farms
    end
end
