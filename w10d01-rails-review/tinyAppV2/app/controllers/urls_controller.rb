class UrlsController < ApplicationController
    # JS EXPRESS
    # app.get('/urls', (req, res) => {
        # templateVars = {urls: urlsDatabase};
        # res.render('urls_index', templateVars);
    # })


    def index
        # because rails is implicit
        # the res.render() is already "written for you" (RAILS MAGIC)
        @urls = Url.all # its a helper method that does SELECT * FROM _TABLE_NAME_
        # if params[:user_id]
          #@urls = Urls.where(user_id: params[:user_id])
        #
        render json: @urls
    end

    def new
    end

    def create
        # express JS
        # remember middleware?
        # bodyParser
        # cookieParser
        # cookie-session
        # ...morgan
        url = Url.new url_params
        url.shortURL = SecureRandom.hex(10)
        # url.save! # why did you use the ! instead of just .save
        if url.save
            redirect_to urls_path
        else
            redirect_to 'urls/new'
        end
    end

    private
    def url_params
        # params is a giant object
        #  which contains a key called URL which is also an object
        #  in that object no matter how big is the URL object is... we only take the values
        #  that are permitted
        params.require(:url).permit(:longURL)
    end
end
