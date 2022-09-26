class UrlsController < ApplicationController
  # ExpressJS

  # const index = (req, res) => {
    # const templateVars = { urls: [...], user: req.ression.id, ...}
    # return res.render('urls_index', templateVars);
  # }

  # const create = (req, res) => {

  # }

  # app.get('/urls', index)
  # app.post('/urls,' create)

  # GET /urls
  def index
    @urls = Url.all
    if params[:user_id] 
      @user = User.find(params[:user_id] )
      @urls = @user.urls
    end
  end

  # GET /urls/new
  def new

  end

  # POST /urls
  def create
    puts "-------------------"
    puts params
    puts "-------------------"

    url = Url.new(url_params)
    url.user_id = 1;
    url.shortURL = SecureRandom.hex(10)
    url.save
    redirect_to '/urls'
  end

  def url_params
    params.require(:url).permit(:longURL)
  end

end


# urls --------------------> class Urls/Url

# urlsRoutes
# ---> all
# ---> find()
# ---> where
# ---> join
# ---> scope 

# sometimes, models (ORMS) are SLOWER than SQL 


