class UrlsController < ApplicationController
    def index
        puts "HELLO WORLD!!!"
        # we gotta get all the URLS from our database using our model
        # store it as "templateVars"
        @urls = Url.all
        # SELECT * FROM urls JOIN users ON urls.user_id = user.id ...
        # render it on our view

        # 
        # res.render("urls_index", templatevars)
        render json: @urls
    end

    def new

    end

    def create
        puts "POST REQUEST!!!!!!!!!!!!!!!!!"
        puts "-----------------------------"
        puts params
        puts "-----------------------------"
        user_id = User.first.id # {id: , name:}
        url = Url.new(url_params)
        url.user_id = user_id
        url.save!
        puts url
        redirect_to '/urls'
    end
    private 
    def url_params
        params.require(:url).permit(:longURL)
    end
end
