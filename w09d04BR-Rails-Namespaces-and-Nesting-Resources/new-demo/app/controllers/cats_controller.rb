class CatsController < ApplicationController

    def index
        puts 'PARAMS----------------'
        puts params
        # SELECT * FROM cats;
        # const templateVars = {};
        # res.render('cats_index', templateVars)
        @greetings = "HELLO"
        if params[:owner_id]
            @greetings = "These cats Have Owners!"
        end
        @a = Cat.all
        puts @a
    end

    def show
        puts 'PARAMS----------------'
        #  .find only works with IDs
        #  .where(color: 'black')  [ ]

        # find_by(color: 'black')  SINGLE entity 
        @cat = Cat.find(params[:id]) # SELECT * FROM cats WHERE id = $1
        # find returns a SINGLE entity 
    end
end
#  Models are blueprints of database tables
# models have default methods, to get data out of a database
# WITHOUT WRITTING ANY SQL..... (ORM)
