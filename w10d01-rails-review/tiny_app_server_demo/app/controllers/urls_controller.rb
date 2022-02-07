class UrlsController < ApplicationController
    # urlsRoutes.js
    # router.get('/', (req, res) => {
        # const templateVars = {user: null};
        # res.render('urls_index', templateVars);
    # })
    def index
        # @greetings = 'Hello World'
        @urls = Url.all
    end

    def create
        # express JS
        # req.query
        # req.body (body-parser)
        # req.params
        # req.session (cookie-session)
        Url.create(url_params)
        redirect_to '/urls'
        puts "======================================"
        puts params
        puts "======================================"

    end

    def new
        @url = Url.new
    end

    private
    def url_params
        params.require(:url).permit(:longURL)
    end
end

#  MODEL -- a blueprint of a table in the database
#  a class with built in methods
#  SELECT * FROM table.name WHERE --- ---- ---- 
#  User.all
#  Product.find(3)
#  Category.where(id: 4)

# In rails models, are singular Url, User

# Migrations