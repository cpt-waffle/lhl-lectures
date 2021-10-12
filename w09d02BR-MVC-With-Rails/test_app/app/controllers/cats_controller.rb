class CatsController < ApplicationController
    # router.get('/', (req, res) => {})
    # app.get('/', (req, res) => {
    #  // templateVars was an object
    #  db.query('SELECT * FROM cats').then(data => data.rows).catch(e => ...)
    #  // that object was sent to the view to add dynamic data on the page
    #  res.render('cats_home', templateVars);
    # })
    # IF YOU HAVE AN ACTION AND IT NEEDS A VIEW
    # GO INTO THE VIEWS FOLDER
    # GO INTO THE CORRESPONDING FOLDER THAT HAS SAME PREFIX AS CONTROLLER
    # MAKE A FILE THAT HAS AN EXACT SAME NAME AS THE METHOD
    def index
        @all_cats = Cat.all # SELECT * FROM CATS
        # Cat.where(name: 'Fluffy') SELECT * FROM CATS WHERE 
        @name = 'Mr Buttons'
        @age = 3
        @array_of_things = [1,2,3,4,5]
    end

    def testimonials
    end
end
