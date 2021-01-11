class UrlsController < ApplicationController
    def index
        if params[:user_id]
            @urls = [Url.first]
        else
            @urls = Url.all
            render json: @urls
        end 

        #  const templateVars = {urls: urlsDatabase}
        # res.render('/urls', templateVars)
        # Invoice.find(2).line_items.each do |line_item| { line_item.products }
        #  ^SELECT^        ^SELECT^                           ^SELECT^
    end
    # create page to add new url GET /urls/new

    def new
        @url = Url.new
    end

    def create
        # byebug
        @url = Url.new(url_params())
        @url.short_url = SecureRandom.base64(12)
        if @url.save
            redirect_to '/urls'
        else
            redirect_to '/urls/new', flash: { error: 'something went wrong' }
        end
    end

    private
    def url_params
        return params.require(:url).permit(:long_url)
    end
end
