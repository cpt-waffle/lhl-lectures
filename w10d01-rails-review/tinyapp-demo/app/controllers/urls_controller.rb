class UrlsController < ApplicationController
  # Express js
  # router.get()
 
  # const index = (req,res) => {
    # const templateVars = {};
    # //urlsHelper.getURLs().then()..
    # db.query('SELECT * FROM urls;').then(data => {
      # templateVars.greetings = "hello world";
      # return res.render('urls_home', templateVars);
    # })
  # })
  

  # app.get('/urls', index );
  # object/classes 
  #  have methods build in


  # convention
  # RESTFUL Conventions
  # GET /resources
  # index
  def index
    @greetings = "hello world";
    @urls = Url.all # SELECT * FROM urls;
    # render json: @urls
  end
# GET /resources/new
# new
def new

end

# create = POST /urls
def create
  puts '-----------------'
  puts params
  url = Url.new(url_params) # instance of url row (shortURL, longURL: '' user_id:)
  url.user_id = 1
  url.shortURL = SecureRandom.base64(10)
  url.save
  puts '-----------------'
  redirect_to '/urls'
end

private 
def url_params 
  return params.require(:url).permit(:longURL)
end

  # POST /resources
  # create

  # GET /resources/:id
  # show

  # GET /resources/:id/edit
  # edit 

  # PUT/PATCH /resources/:id
  # update

  # DELETE /resources/:od
  # destroy


end
