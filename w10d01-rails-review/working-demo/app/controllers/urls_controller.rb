class UrlsController < ApplicationController

    # res.render('..')
    #  what is a controller ?
    #  is the middle between client and server
    #  its the logic of what happens when this specific route has been hit
    #  Communicates with the view and model 
    #  what is a view?
    # 
    # the visual(UI) that the customer interacts with
    # app.get('/urls', (req,res) => {
        # const templateVars = { urlDatabase: urls}
        # res.render('urls_index', templateVars)
    # })
    #  Loggin/Logout 
    # cookie-sessions

    def index
        @hello = 'Welcome to the review'
        @urls  = Url.all
        puts 'SESSION-------------------'
        puts session[:user_id]
    end

    def new
    end

    # 
    def create
        session[:user_id] = 1
        puts "PARAMS ---------------------"
        puts params
        uuid = UUID.new
        temp_url = User.first.urls.new(url_params)
        temp_url.shortURL = uuid.generate
        if temp_url.save
            redirect_to '/urls'
        end
    end

    private
    def url_params
        params.require(:url).permit(:longURL)
    end
end
