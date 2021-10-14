class CatsController < ApplicationController
    # app.get('/owners/:id, (req, res) )
    # 
    def index
        @cats = Cat.all # <-- Cat <-- model
        # Owner <--- number_of_visits

        if params[:owner_id]
            @owner = Owner.find(params[:owner_id])
            @cats = Owner.find(params[:owner_id]).cats
            # SELECT * FROM owners JOIN cats ON owners.id = cats.owner_id
        end
    end

    # /cats/new GET <---- FORM PAGE

    # /cats  POST <---- CREATE A NEW CAT

    # Cat.create(params[:cat]) <----- {name: , age:  , color, owner_id }
#  BANK {account_ammount: 99999999999999999999999999999999999}

    private
    def cat_params
        params.permit(:name)
    end
end


# Owners Table
# Cats Table

#  Cats <---- owner_id

# A page where i can see the owner name, and the cats they own