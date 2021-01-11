class UrlsController < ApplicationController
    def index
        # res.render('/urls', templateVars);
        if params[:user_id]
            @urls = Url.where(user_id = params[:user_id]) 
        else 
            @urls = Url.all # SELECT * FROM urls;
            render json: @urls
        end
    end

    def new
        # @ variables in this instance are your templateVars
        @greetings = HELLO
        @url = Url.new
    end

    def create
        url = Url.new(url_params)
        url.short_url = SecureRandom.hex(4);
        if url.save
            redirect_to '/urls'
        else
            redirect_to '/urls/new', flash: 'Something Wrong happened!'
        end
    end


    private
    def url_params
        params.require(:url).permit(:long_url)
    end
end
