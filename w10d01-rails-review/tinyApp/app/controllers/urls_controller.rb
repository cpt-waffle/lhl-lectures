class UrlsController < ApplicationController
  # app.get("/urls", index);
  # pool = new Pool({})

  # pool.query('SELECT ...')

  # const index = (req,res) => {
      # const templateVars = {};
      # pool.query("SELECT * FROM urls").then(data => {
        # templateVars.urls = data.rows;
        # return res.render("urls");
      # })
  # }


  def index
    @urls = Url.all
    render json: @urls
  end

  def new
  end

  def create
    puts "-------------------------------"
    url = Url.new(url_params)
    url.shortURL = SecureRandom.base64(12)
    url.save
    redirect_to '/urls'
    puts "-------------------------------"

  end

  private
  def url_params
    params.require(:url).permit(:longURL)
  end

end
