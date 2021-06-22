class CatsController < ApplicationController

    # inside of the views folder there is a cats folder

    # router.get('/', (req, res) => {
        # const templateVars = {urls: urlDatabase}; 
        # render('index_cats', template)
    # })
    def index
        @greetings = 'hello world from line 10'
        @bool = true
        @cats = Cat.all # SELECT * FROM CATS;
        # INSERT INTO CATS VALUES()
        # Cat.create(name: 'mr buttons', age: 4)
    end


    def show
    end
end
