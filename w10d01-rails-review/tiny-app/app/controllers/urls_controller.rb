class UrlsController < ApplicationController
    # app.get('/urls', (req,res) => {
        # big hard logic about filtering urls based on user....
        # const templateVars = {urls: urlsDatabase, user: findUserById(req.session.user_id)}
        # res.render('urls_index', templateVars)
    # })
    def index
        @urls = Url.all
        render json: @urls
    end

    def new
    end

    # bodyParser Middware
    # cookieParser
    # sessions
    # req.params
    # req.queries 
    def create
        puts '---------------'
        puts params
        puts '---------------'
        # We made users, and urls need a user_id
        #  so for demo we are going to generature the URL for
        # our First user in our database....
        url = User.first.urls.new(url_params)
        url.save
        redirect_to '/urls'
    end

    private

    def url_params
        params.require(:url).permit(:longURL)
    end

end
