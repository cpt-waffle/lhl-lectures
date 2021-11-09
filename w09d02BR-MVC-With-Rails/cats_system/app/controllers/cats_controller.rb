class CatsController < ApplicationController

    # app.get('/cats', (req,res) => { })
    # router.get('/', (req,res) => {

       # res.render('cats_homepage', templateVars);
    # })
    def index # <--- the request of GET /cats
        puts '-------------------------------'
        @cats = Cat.all
        @greetings = 'hello!'
        puts '-------------------------------'
    end
    # if you have a action (let say index) AND it needs
    # to send a view (HTML) as a response
    # go into the views folder under the _controller_name_ prefix
    # and make a file that is EXACTLY THE SAME NAME AS THE action/method  (**.html.erb)


    def show # <--- the request of GET /cats/:id
    end
end
