class UrlsController < ApplicationController
    def index
        puts session[:user_id]
    end

    def new
        @url = Url.new
    end

    def create
        shortURL = SecureRandom.hex(6)
        url = Url.new(url_params)
        url.shortURL = shortURL
        url.user_id = session[:user_id]
        if url.save!
            redirect_to '/urls'
        else
            @error = 'something went wrong!!'
            redirect_to '/urls/new', flash: {error: 'something went wrong'}
        end
    end

    private

    def url_params
        params.require(:url).permit(:longURL)
    end
end
