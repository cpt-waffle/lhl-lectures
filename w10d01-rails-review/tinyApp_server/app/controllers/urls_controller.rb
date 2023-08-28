class UrlsController < ApplicationController


  # const index = (req,res) => {
    # const templateVars = {};
    # db.query('SELECT * FROM urls').then(data => {
      # templateVars.urls = data.rows;
      # return res.render('urls_index', templateVars);
    # })
  # })

  # app.post('/urls', create)
  # app.get('/urls/new', new)
  # app.post('/urls/:id', update)

  # app.get('/urls', index);
  def index
    @urls = Url.all
    render json: @urls
  end

  # get /new
  def new
  end

  # post
  def create
    puts "----------------"
    # byebug
    puts  params[:url]
    url = Url.new(url_params)
    url.shortURL = SecureRandom.base64(10)
    url.save
    redirect_to '/urls'
  end

  private
  def url_params
    params.require(:url).permit(:longURL)
  end

end
