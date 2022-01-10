class UrlsController < ApplicationController
    #  ExpressJS --- one of the routes
    #  /urls
    #  router.get('/', (req, res) => {

    #  const templateVars = {}
    #  res.render('urls_home', templateVars);
    # })

    # MODELS
    # Migrations
    # Active Record
    # Databases 
   def index
     @urls = Url.all
     render json: @urls
   end

   def new
   end


   def create
    # EXPRESS JS
    # req.params
    # req.query
    # req.body 
    # req.session
    puts '-----------------------'
    puts params[:url][:longURL]
    puts '-----------------------'
    temp_url = Url.new(url_params)
    temp_url.shortURL = 'AAAAA'
    temp_url.user_id = 3

    if temp_url.save
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
