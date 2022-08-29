class UrlsController < ApplicationController
  # ExpressJS
  # const app = express();
  # const router = express.Router()

  # const index = (req,res) => {
    #  ...
    #  pg.query('SELECT * FROM urls', (data) => {
      #  const templateVars = {urls: data.rows};
      #  return res.render('urls_all', templateVars);
    # })
  # }

  # router.get('/', index);
  # router.get('/urls', index);

  def index
    @greetings = 'Hello World!'
    @urls = Url.all
    render json: @urls
  end

  def new
  end

  def create
    puts params
    url = Url.new(url_params)
    url.shortURL = SecureRandom.hex(10)
    url.save!
    redirect_to '/urls'
  end

  private
  def url_params
    params.require(:url).permit(:longURL)
  end

end

#  Static Pages / Pages
#  Abouts
#  Teams
#  information
#  Contact uS