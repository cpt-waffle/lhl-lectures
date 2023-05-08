class UrlsController < ApplicationController

  # app.get('/urls', (req,res) => {
    # db.query("SELECT * FROM urls").then(data => {
      # const templateVars = {};
      # templateVars.urls = data.rows;
      # res.render('/urls,' tempalateVars)
    # })
  # })

  def index
    @urls = Url.all
    render json: @urls
  end

  def new
  end

  def create
    # req.body
    # req.query 
    # req.params
    puts '-----------------------------'
    url = Url.new(url_params)
    url.user_id = 1
    url.shortURL = SecureRandom.base64(10)
    url.save
    redirect_to '/urls'
    puts '-----------------------------'

  end

  def banana
  end

  private
  def url_params
    params.require(:url).permit(:longURL)
  end

end
