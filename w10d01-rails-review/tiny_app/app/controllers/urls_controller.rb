class UrlsController < ApplicationController
  @@i = 1
  # const index = (req,res) => {
    #  //.... logic goes here
    #  const templateVars = {}
    #  db.query('SELECT * FROM urls').then(data => {
      #  templateVars.urls = data.rows;
      #  return res.render('/urls_index', templateVars);
    # })
  # } 

  # app.get('/urls', index)
  # router.get('/urls', index)
  def index
    # @@i = @@i + 1
    # @i = @@i
    # @arr = ['one', 'two', 'three']
    @urls = Url.all
  end

  def new
  end

  def create
    # req.body.
    puts '-------------'
    puts params
    puts '-------------'
    url = Url.new(url_params)
    url.user_id = 1
    url.shortURL = SecureRandom.hex(10)
    url.save
    redirect_to '/urls'
  end

  private
  def url_params 
    params.require(:url).permit(:longURL)
  end

end
