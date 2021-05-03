#  const router = express.Router()

class UrlsController < ApplicationController
    #  router.get('/', (req,res) => {
    #    //... all of the hard logic here....
    #    const templateVars = {urls: {.... }}
    #    res.render('...', templateVars)
    # })
    def index
        @urls = Url.all
        render json: @urls
    end

    # POST /urls
    def create
        puts params
        # {shortURL: , longURL, user_id: _____}
        url = User.first.urls.new(url_params)
        puts url
        if url.save!
            redirect_to '/urls'
        else
            redirect_to '/urls/new'
        end
    end 

    # GET /urls/new
    def new
    end

    private
    def url_params
        return params.require(:url).permit(:longURL)
    end

end
