class UrlsController < ApplicationController
  # const index = (req,res) => {
    # const templateVars = {};
    # db.query("SELECT * FROM urls;").then(data => {
      # templateVars.urls = data.rows;
      # res.render('urls_index', templateVars);

    # }).catch(e => throw new Error(e));
  # }

  # app.get('/urls', index)

  # GET /urls
  def index
    @urls = Url.all # SELECT * FROM urls; 
    render json: @urls
  end

  # Saving URL

  #  Form
  # GET /urls/new
  def new
  end


  #  a POST /urls
  def create
    # where do i get the info from form ?
    # express ---> req.body
    puts "------------"
    puts params
    url = Url.new(url_params) # {longURL: 'www.neopets.com'} --->
    url.shortURL =  SecureRandom.base64(10)
    if url.save
      redirect_to '/urls'
    else 
      redirect_to '/urls/new'
    end
    # INSERT INTO urls (longURL) values ('www.neopets.com')
    puts "------------"
  end

  private 
  def url_params
    params.require(:url).permit(:longURL)
  end
end
