class UsersController < ApplicationController
    @userCount = 1
    # router.get('/users', (req, res ) => {
        # bodyParser/
        # req.params
        # req.query
        # req.body
        # req.session

        # const templateVars = {};
        # res.render('users_home', templateVars);
    # })
    def index
        puts "----------------------"
        puts params
        puts session
        puts "----------------------"

        @greeting = "hello"
        @arr = [1,2,3,4]
    end
end
