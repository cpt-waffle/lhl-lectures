class UrlsController < ApplicationController
    # ExpressJS
  # app.get('/banana', (req, res) => {
      #  const templateVars = {};
      # db.query("SELECT * FROM urls;").then(res => {
        #  templateVars.urls = res.rows;
        #  res.render('banana', templateVars);
      # }).catch(e => res.send('error!'))
  # })
  def index
    @greetings = 'Urls List'
    @urls = Url.all
  end

  def create
    # req.body
    # req.params
    # req.query <---
    # req.sessions
    puts "---------------------"
    @url = Url.new(url_params)
    @url.shortURL = SecureRandom.hex(10)
    @url.save!
    redirect_to '/urls'
    # Url
    # bank Account 

    puts "---------------------"

  end

  def new
  end

  private
  def url_params 
    params.require(:url).permit(:longURL)
  end
end
