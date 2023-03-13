class UrlsController < ApplicationController
  # const index = (req,res) => {
    # //...
    # const templateVars = {};
    # db.query('SELECT * FROM urls').then(data => {
      # templateVars.urls = data.rows;
      # return res.render('urlshome', templateVars)
    # })
  # }


  # app.get('/urls', index)
  # app.post('/')


  # ACTIVE RECORD (ORM)
  def index
    @url = Url.all
  end

  def new
  end

  # POST  /urls
  def create
    puts '-----------------------------'
    puts params
    url = Url.new(url_params)
    url.user_id = 1 # Could be a session
    url.shortURL = SecureRandom.base64(12)
    url.save!
    redirect_to '/urls'
  end

  private
  def url_params
    params.require(:url).permit(:longURL)
  end
end
