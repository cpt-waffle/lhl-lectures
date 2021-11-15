class UrlsController < ApplicationController
    #app.get('/urls', (req, res) => {
        #const templateVars = {};
        #res.render('urls_index', templateVars);
    # })

    def index
        @urls = Url.all # SELECT * FROM urls;
        render json: @urls
    end

    # bodyParser <--- Middleware
    # form new route
    def new
    end

    # post route
    def create
        if params[:url][:longURL].length != 0
            Url.create(url_params)
            redirect_to '/urls'
        else
            redirect_to '/urls/new' 
        end
    end

    private
    def url_params
        params.require(:url).permit(:longURL)
    end

end
