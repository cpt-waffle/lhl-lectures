class UrlsController < ApplicationController
    def index
        #  in express
        #  app.get('/urls', (req, res) => {
            # templateVars = {urls: urlsDatabase};
            # res.render('urls_index', templateVars);
        # })
        @urls = Url.all
        puts 'SESSION --------------------'
        puts session[:user_id]
        # render json: @urls
    end


    def new
    end

    def create
        puts "----------------------- CREATE HERE!!!"
        # bodyParser, cookieSessions, etc
        # req.params

        puts params[:url]
        new_url = Url.new(url_params())
        if new_url.save
            session[:user_id] = 35
            redirect_to '/urls'
        else
            redirect_to '/urls/new'
        end
    end

    private

    def url_params
        #  no matter whats inside the urls object 
        #  I only am going to grab the longURL key/val pair
        # {id: 1, longURL: 'www.google.ca', shortURL: 'asfd45f', ...}
        params.require(:url).permit(:longURL) # returns a hash { with only longURL }
    end
end
