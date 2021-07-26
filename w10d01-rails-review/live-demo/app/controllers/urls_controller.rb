class UrlsController < ApplicationController
    #  res.render doesnt happen usually...
    #  so the way rails does it is: it matches the action name, with view file name
    def index
        @urls = Url.all # Grab all the urls = SELECT * FROM urs;
        # @ -> it makes the variable global/sharable between the view (index.html.erb)
        # templateVars = {key:1 key2: [..]};
        render json: {urls: @urls, user: User.first}
    end

    # /urls POST
    def create
        puts '---------------------'
        puts params
        # A user has a url ( so we will have to give a user_id to the url)
        user_id = User.first.id
        # SELECT * FROM urls  ===> result[0]
        # Urls --> FK user_id
        # create a shortURL (UUID?)
        short_url = SecureRandom.alphanumeric(6)
        # url.save (save it)
        temp_url = Url.new(url_params)
        temp_url.shortURL = short_url
        temp_url.user_id = user_id
        temp_url.save
        redirect_to '/urls'
        # redirect
    end

    # /urls/new GET
    def new
    end

    private 
    def url_params
        params.require(:url).permit(:longURL)
    end

end
