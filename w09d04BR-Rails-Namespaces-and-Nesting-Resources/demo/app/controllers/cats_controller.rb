class CatsController < ApplicationController
    def index
        puts 'CATS CONTROLLER -------------------------------------------------------------------------------------------------'
        puts params[:owner_id]
        if params[:owner_id]
            owner = Owner.find(params[:owner_id])
            @name = owner.name
            @cats = owner.cats # select query from active_record
        else 
            # @cats = Cat.includes(:owner).all.to_json( :include => [:owner] ) # select query from active_record
            @cats = Cat.includes(:owner).all 
            # render json: @cats
        end
    end
end
