class CatsController < ApplicationController
    # router file (equivalent in ExpressJS)
    # app.get('/', (req,res) => {
        # templateVars = {catName: 'MR Buttons', age: 2}
        # res.render('cats_index', templateVars);
    # })
    def index
        @cat_name = "Mr Buttons"
        @age = 2
        # normally (90% time) when working with server side rails
        # you dont write a render...
        # instead, rails will render a file THAT IS EXACTLY THE SAME NAME
        # AS THE METHOD ^
    end
end
