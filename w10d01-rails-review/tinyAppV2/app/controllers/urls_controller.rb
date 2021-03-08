class UrlsController < ApplicationController

    # router.get('/urls', (req, res) => {
    # ..logic here
    # const templateVars = {database, users};
    # res.render('urls_index', templateVars); 
    # })

    # Migrations
    # Models
    # Forms (<-- most annyoing and secure part of rails ever known to people!!!  >:( )
    def index
        @urls = User.find(1).urls
        render json: @urls
    end

    def new
    end


    # in tinyApp in post, we never rendered() we redirected()
    def create
        puts '----------------------'
        puts params 
        # i got the longURL
        # I need the shortURL
        # I need to generate the shortURL
        shortUrl = SecureRandom.hex(10)
        url = Url.new(url_params)
        url.user_id = 1
        url.shortURL = shortUrl
        if url.save 
            redirect_to '/urls'
        else
            redirect_to '/urls/new'
        end
    end

    private
    def url_params
        return params.require(:url).permit(:longURL)
    end

end
