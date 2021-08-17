# ExpressJS as your routes.js files
# catsRoutes.js
# Express.router()

class CatsController < ApplicationController
    # router.get('/', (req, res) => { 
        # const templateVars = {};
        # res.render('cats_index', templatsVars) // <---
        # res.json({})
    # })
    def index
        # @variables are global to the view
        @cats = Cat.all # SELECT * FROM Cats;
        @cat = Cat.where(id: 1)
        puts @cat
        puts @cats
        @greetings = 'hello world!!!!'
        @cat_name = "Puma"
        @cat_name2 = 'Rosy'
        puts 'WE HAVE MADE IT HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
        # ruby has implicid returns...
    end
end

# Yesterday you did an activity with something called ActiveRecord
# WTF IS ACTIVE RECORD?!

# A model is a blueprint for a database table WITH THOSE METHODS