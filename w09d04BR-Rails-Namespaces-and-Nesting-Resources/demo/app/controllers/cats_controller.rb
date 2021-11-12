class CatsController < ApplicationController
    def index
        # REQ.PARAMS 
        # REQ.BODY
        # REQ.QUERY
        # REQ.SESSION
        # templateVars
        # SELECT * cats JOIN owner ON cats.owner_id = owner.id WHERE onwer.id = 3
        # belongs_to
        # has_many
        @cats = Cat.all
        if params[:owner_id]
            @cats = Owner.find(params[:owner_id]).cats
            #  
            # Order Page
            # line items
            # name product
            #price
            # qty
            # Order.find(params[:order_id]).line_items.each | line_item | line_item.product
            @greetings = "SPECIFIC OWNER!!"
        end
    end
end

# I want to have a page WHERE
# it shows me all the cats FOR a specific owner
# Which controller would be responsible for it?
# what would be the RESTFUL route ??
