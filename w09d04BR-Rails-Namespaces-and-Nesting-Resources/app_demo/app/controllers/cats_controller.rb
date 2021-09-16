class CatsController < ApplicationController
    # app.get('/cats/:id', (req,res) => {
        # req.body <--- form /// body-parser npm
        # req.params
        # req.query
    # })

    def index
        puts '-----------------------------'
        puts params[:owner_id]
        if params[:owner_id] 
            @cats = Owner.find(params[:owner_id]).cats
        else
            @cats = Cat.includes(:owner).all # .all is a built in method for SELECT * FROM _T_Name
        end
        # render json: @cats.to_json( include: :owner)
    end
end

# 
